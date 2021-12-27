import { AbstractConnector } from '@web3-react/abstract-connector';
import { InjectedConnector } from '@web3-react/injected-connector';
import { PortisConnector } from '@web3-react/portis-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { NetworkConnector } from '@web3-react/network-connector';

enum Wallet {
  NETWORKCONNECTOR = 'Network',
  INJECTEDCONNECTOR = 'MetaMask',
  WALLETCONNECTCONNECTOR = 'WalletConnect',
  PORTISCONNECTOR = 'Portis',
  WALLETLINKCONNECTOR = 'Coinbase',
}

export function convertConnectorTypeToWalletName(
  connector: AbstractConnector | undefined
): Wallet | undefined {
  if (connector instanceof InjectedConnector) return Wallet.INJECTEDCONNECTOR;
  else if (connector instanceof WalletConnectConnector)
    return Wallet.WALLETCONNECTCONNECTOR;
  else if (connector instanceof PortisConnector) return Wallet.PORTISCONNECTOR;
  else if (connector instanceof WalletLinkConnector)
    return Wallet.WALLETLINKCONNECTOR;
  else if (connector instanceof NetworkConnector)
    return Wallet.NETWORKCONNECTOR;
}
