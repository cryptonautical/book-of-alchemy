import { BigNumber } from '@ethersproject/bignumber';

interface TransactionData {
  status: string;
  message: string;
  result: Transaction[];
}

interface Transaction {
  blockHash: string;
  blockNumber: string;
  confirmations: string;
  contractAddress: string;
  cumulativeGasUsed: string;
  from: string;
  gas: BigNumber;
  gasPrice: BigNumber;
  gasUsed: BigNumber;
  hash: string;
  input: string;
  nonce: string;
  timeStamp: string;
  to: string;
  tokenDecimal: string;
  tokenName: string;
  tokenSymbol: string;
  transactionIndex: string;
  tokenID: string;
}

export interface AssetDetail {
  contractAddress: string;
  tokenName: string;
  tokenSymbol: string;
  tokenID: string;
  tokenDecimal: string;
}

interface Assets {
  [key: string]: AssetDetail;
}



export const getContainedAssets = async (
  address: string,
  contracts: string[],
  chainId: number,
  etherscanApiKey: string,
) => {
  const assetsDetail: AssetDetail[] = [];
  for (let contract in contracts){
  const endpoint =
    chainId === 1
      ? `https://api.etherscan.io/api?module=account&action=tokennfttx&contractaddress=${contracts[contract]}&address=${address}&startblock=0&endblock=999999999&sort=asc&apikey=${etherscanApiKey}`
      : chainId === 5
      ? `https://api-goerli.etherscan.io/api?module=account&action=tokennfttx&contractaddress=${contracts[contract]}&address=${address}&startblock=0&endblock=999999999&sort=asc&apikey=${etherscanApiKey}`
      : chainId === 3
      ? `https://api-ropsten.etherscan.io/api?module=account&action=tokennfttx&contractaddress=${contracts[contract]}&address=${address}&startblock=0&endblock=999999999&sort=asc&apikey=${etherscanApiKey}`
      : `https://api-rinkeby.etherscan.io/api?module=account&action=tokennfttx&contractaddress=${contracts[contract]}&address=${address}&startblock=0&endblock=999999999&sort=asc&apikey=${etherscanApiKey}`;

  try {
    const response = await fetch(endpoint);
    const data: TransactionData = await response.json();

    if (data.message !== 'OK' && data.message !== 'No transactions found') {
      throw new Error(data.result as unknown as string);
    }
    const assets: Assets = data.result.reduce((acc, tx) => {
      return { ...acc, [tx.tokenID]: { ...tx } };
    }, {});
    for (const o in assets) {
      assetsDetail.push(assets[o]);
    }

  } catch (err) {
    throw err;
  }
  }
  return assetsDetail
};
