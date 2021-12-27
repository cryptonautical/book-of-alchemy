import { FC } from 'react';
import { HStack } from '@chakra-ui/layout';
import { truncate } from '../../utils/address';
import { Button } from '@chakra-ui/react';
import { VscLink } from 'react-icons/vsc';
import { useWeb3React } from '../../hooks/web3';
import { useModal } from '../../store/modals';
import { ModalType } from '../modals/types';
import { isMobile } from 'react-device-detect';
import { getAddress } from 'ethers/lib/utils';
import NetworkPill from '../connectWallet/NetworkPill';
import GradientBackground from '../shared/GradientBackground';

const UserWallet: FC = () => {
  const { account, chainId = 1 } = useWeb3React();
  const { openModal } = useModal();
  const openWalletModal = () => {
    openModal(ModalType.connectWallet);
  };
  const buttonProps = {
    bg: 'orange.300',
    variant: 'ghost',
  };

  if (account) {

    return (
      <HStack spacing={4}>
        {chainId !== 1 && !isMobile && <NetworkPill size='xl' />}
        <GradientBackground visible borderRadius='xl'>
          <Button onClick={openWalletModal} {...buttonProps}>
            {truncate(getAddress(account))}
          </Button>
        </GradientBackground>
      </HStack>
    );
  }

  return (
    <GradientBackground visible borderRadius='xl'>
      <Button
        rightIcon={<VscLink />}
        onClick={openWalletModal}
        {...buttonProps}
      >
        Connect Wallet
      </Button>
    </GradientBackground>
  );
};

export default UserWallet;
