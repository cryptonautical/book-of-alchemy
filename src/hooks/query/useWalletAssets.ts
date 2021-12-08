import {useWeb3React} from '../web3';
import {getContainedAssets} from '../../helpers/wallet';
import {useQuery} from 'react-query';
import {useConfig} from '../../store/config';
import {Queries} from '../../types';
import {AssetDetail} from '../../helpers/wallet'

export function useWalletAssets(contract: string[]) {
    const {account, chainId = 1, provider} = useWeb3React();
    const {etherscanApiKey} = useConfig(chainId).commonConfig;
    return useQuery<AssetDetail[]>(
        [Queries.WALLET_ASSETS, account, chainId],
        () =>
            getContainedAssets(
                account!,
                contract,
                chainId,
                etherscanApiKey
            ),
        {
            enabled: !!account,
        }
    );
}
