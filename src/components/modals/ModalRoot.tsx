import { FC } from 'react';
import { useModal } from '../../store/modals';
import { ModalType } from './types';
import ConnectWalletModal from '../modals/ConnectWalletModal';
import TxErrorModal from '../modals/tx/TxErrorModal';
const ModalRoot: FC = () => {
  const { modalType, modalProps } = useModal();

  switch (modalType) {
    case ModalType.connectWallet:
      return <ConnectWalletModal />;
    case ModalType.txnError:
      return <TxErrorModal {...modalProps} />;
  }
  return null;
};

export default ModalRoot;
