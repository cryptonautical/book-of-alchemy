import {useWeb3React as useWeb3ReactCore} from '@web3-react/core';
import {useEffect, useMemo} from 'react';
import {isMobile} from 'react-device-detect';
import {NetworkConnector} from '@web3-react/network-connector';
import {useModal} from '../store/modals';
import {useConnection} from '../store/connection';
import {getInfuraProvider} from '../helpers/providers';
import {Web3Provider} from '@ethersproject/providers';
import {Web3ReactContextInterface} from '@web3-react/core/dist/types';
import {
    injectedConnector as injected,
    networkConnector
} from '../connectors';

export type Web3React = Web3ReactContextInterface & {
    provider: Web3Provider;
};

export function useWeb3React(): Web3React {
    const web3React = useWeb3ReactCore();

    const provider: Web3Provider = useMemo(() => {
        if (
            web3React.library &&
            web3React.library.getSigner().provider
        ) {
            return web3React.library.getSigner().provider;
        } else {
            return getInfuraProvider(web3React.chainId || 1);
        }
    }, [web3React.chainId, web3React.library]);

    return {
        ...web3React,
        provider
    };
}

export function useEagerConnect() {
    const {tried, setTried} = useConnection();
    const {closeModal} = useModal();
    const {activate, active, connector} = useWeb3ReactCore(); // specifically using useWeb3ReactCore because of what this hook does

    useEffect(() => {
        injected.isAuthorized().then((isAuthorized) => {
            if (isAuthorized) {
                activate(injected, undefined, true).catch(() => {
                    setTried(true);
                });
            } else {
                //@ts-ignore
                if (isMobile && window.ethereum) {
                    activate(injected, undefined, true).catch(() => {
                        setTried(true);
                    });
                } else {
                    setTried(true);
                }
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activate]); // intentionally only running on mount (make sure it's only mounted once :))

    // if the connection worked, wait until we get confirmation of that to flip the flag
    useEffect(() => {
        if (active) {
            setTried(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active]);

    useEffect(() => {
        if (tried && !active) {
            activate(networkConnector, undefined, false);
        }
    }, [tried, active, activate]);

    useEffect(() => {
        if (connector && !(connector instanceof NetworkConnector)) {
            closeModal();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [connector]);
}

/**
 * Use for network and injected - logs user in
 * and out after checking what network theyre on
 */
export function useInactiveListener(suppress = false) {
    const {active, error, activate} = useWeb3ReactCore(); // specifically using useWeb3React because of what this hook does

    useEffect(() => {
        //@ts-ignore
        const {ethereum} = window;

        if (ethereum && ethereum.on && !active && !error && !suppress) {
            const handleChainChanged = () => {
                // eat errors
                activate(injected, undefined, true).catch((error) => {
                    console.error('Failed to activate after chain changed', error);
                });
            };

            const handleAccountsChanged = (accounts: string[]) => {
                if (accounts.length > 0) {
                    // eat errors
                    activate(injected, undefined, true).catch((error) => {
                        console.error('Failed to activate after accounts changed', error);
                    });
                }
            };

            ethereum.on('chainChanged', handleChainChanged);
            ethereum.on('accountsChanged', handleAccountsChanged);

            return () => {
                if (ethereum.removeListener) {
                    ethereum.removeListener('chainChanged', handleChainChanged);
                    ethereum.removeListener('accountsChanged', handleAccountsChanged);
                }
            };
        }
        return undefined;
    }, [active, error, suppress, activate]);
}
