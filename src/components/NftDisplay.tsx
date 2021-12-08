import { FC } from 'react';
import { VStack } from '@chakra-ui/react';
import { NftGallery } from 'react-nft-gallery';
import { useWeb3React } from '../hooks/web3';
import { useWalletAssets } from '../hooks/query/useWalletAssets';


const generateIds = (contracts: string[], walletAssets: any) => {

  let ids = []

  for (let contract in contracts) {
    console.log(contracts[contract]);
    for (let tx in walletAssets) {
      console.log(walletAssets[tx])
      if (walletAssets[tx].contractAddress === contracts[contract]){

        ids.push(walletAssets[tx].contractAddress + '/' + walletAssets[tx].tokenID);
      }
    }
  }

  return ids;
}

const NftDisplay: FC = () => {
  const contracts = ["0xf5de730b479a4890b725958059da925f43be8117"];
  const {
    data: walletAssets
  } = useWalletAssets(contracts);

  const { account } = useWeb3React();
  if (account) {
    return (
        <NftGallery
            ownerAddress={account!}
            darkMode={true}
            showcaseMode={true}
            showcaseItemIds={generateIds(contracts, walletAssets!)}
        />

    )
  } else {
    return (
        <></>
    )
  }
}

export default NftDisplay;
