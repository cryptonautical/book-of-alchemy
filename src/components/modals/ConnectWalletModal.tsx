import { FC } from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { useModal } from '../../store/modals';
import { isMobile } from 'react-device-detect';
import { useWeb3React } from '../../hooks/web3';
import { Link, ModalFooter, SimpleGrid, Text } from '@chakra-ui/react';
import {
  injectedConnector,
  portisConnector,
  walletConnectConnector,
  walletLinkConnector,
} from '../../connectors';
import MMLogo from '../../img/wallets/metamask-logo.svg';
import PortisLogo from '../../img/wallets/portis-logo.svg';
import CoinbaseLogo from '../../img/wallets/coinbase-logo.svg';
import WalletConnectLogo from '../../img/wallets/walletconnect-logo.svg';
import ConnectedWalletInfoBar from '../connectWallet/InfoBar';
import WalletSelectorBox from '../connectWallet/WalletSelectorBox';

const ConnectWalletModal: FC = () => {
  const { closeModal, isOpen } = useModal();
  const { active, account } = useWeb3React();

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      size={isMobile ? 'full' : 'md'}
      scrollBehavior={isMobile ? 'inside' : 'outside'}
    >
      <ModalOverlay />
      <ModalContent
        borderRadius={isMobile ? 'none' : 'xl'}
        mt={isMobile ? 0 : undefined}
        bg='orange.800'
      >
        <ModalHeader>
          <Text>{active && account ? 'Account' : 'Connect Wallet'}</Text>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          {active && account && <ConnectedWalletInfoBar />}
          <SimpleGrid columns={2} spacing='20px'>
            {!isMobile && (
              <WalletSelectorBox
                connector={injectedConnector}
                title='MetaMask'
                src={MMLogo}
              />
            )}
            <WalletSelectorBox
              connector={walletConnectConnector}
              title='WalletConnect'
              src={WalletConnectLogo}
            />
            {!isMobile && (
              <WalletSelectorBox
                connector={portisConnector}
                title='Portis'
                src={PortisLogo}
              />
            )}
            <WalletSelectorBox
              connector={walletLinkConnector}
              title='Coinbase'
              src={CoinbaseLogo}
            />
          </SimpleGrid>
        </ModalBody>
        <ModalFooter justifyContent='center' py={6}>
          <Text textAlign='center' fontSize={['sm', 'md']}>
            New to Ethereum?{' '}
            <Link
              color='cyan.500'
              href='https://ethereum.org/en/wallets/'
              isExternal
            >
              Learn more about wallets
            </Link>
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ConnectWalletModal;
