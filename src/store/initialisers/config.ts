import { CommonConfig, ConfigOptions } from '../config';

export const config: ConfigOptions = {
  1: {
    rpcUrl: 'https://mainnet.infura.io/v3/d8e57a351c50478ebea4958a434ee261'
  },
  3: {
    rpcUrl: 'https://ropsten.infura.io/v3/d8e57a351c50478ebea4958a434ee261'
  },
  4: {
    rpcUrl: 'https://rinkeby.infura.io/v3/d8e57a351c50478ebea4958a434ee261'
  },
  5: {
    rpcUrl: 'https://goerli.infura.io/v3/d8e57a351c50478ebea4958a434ee261'
  }
};

export const commonConfig: CommonConfig = {
  supportedNetworks: [1, 3, 4, 5],
  appName: 'https://bookofalchemy.io',
  portisApiKey: 'e86e917b-b682-4a5c-bbc5-0f8c3b787562',
  etherscanApiKey: 'CT9DRWUCYCCZ9Y9FPQ9PNBR66QSTXGE484',
  infuraApiKey: 'd8e57a351c50478ebea4958a434ee261'
};
