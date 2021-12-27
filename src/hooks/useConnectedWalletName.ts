import {useWeb3React} from '../hooks/web3';
import {useMemo} from 'react';
import {
    injectedConnector,
    walletConnectConnector,
    portisConnector,
    walletLinkConnector,
} from '../connectors';

export function useConnectedWalletName() {
    const {active, connector} = useWeb3React();

    return useMemo(() => {
        if (active) {
            if (connector === injectedConnector) {
                return 'Metamask';
            }
            if (connector === walletConnectConnector) {
                return 'WalletConnect';
            }
            if (connector === portisConnector) {
                return 'Portis';
            }
            if (connector === walletLinkConnector) {
                return 'Coinbase';
            }
        }
        return null;
    }, [connector, active]);
}
