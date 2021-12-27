import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { PortisConnector } from '@web3-react/portis-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { NetworkConnector } from '@web3-react/network-connector';
import { store } from '../store/store';

const { config, commonConfig } = store.getState().config;

const { supportedNetworks, appName, portisApiKey } = commonConfig;

export const injectedConnector = new InjectedConnector({
  supportedChainIds: supportedNetworks,
});

export const networkConnector = new NetworkConnector({
  urls: {
    1: config[1].rpcUrl,
    4: config[4].rpcUrl,
    5: config[5].rpcUrl,
  },
  defaultChainId: 1,
});

export const walletConnectConnector = new WalletConnectConnector({
  rpc: {
    1: config[1].rpcUrl,
    4: config[4].rpcUrl,
    5: config[5].rpcUrl,
  },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
});

export const portisConnector = new PortisConnector({
  dAppId: portisApiKey,
  networks: supportedNetworks,
});

export const walletLinkConnector = new WalletLinkConnector({
  url: config[1].rpcUrl,
  appName,
});
