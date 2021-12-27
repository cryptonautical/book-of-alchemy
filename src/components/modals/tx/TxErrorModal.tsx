import { FC } from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { IoWarningOutline } from 'react-icons/io5';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { useModal } from '../../../store/modals';

const TxErrorModal: FC<{ error: any }> = ({ error }) => {
  const { closeModal } = useModal();

  return (
    <Modal isOpen={true} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent borderRadius='xl'>
        <ModalHeader textAlign='center'>Error</ModalHeader>
        <ModalCloseButton />
        <ModalBody textAlign='center' py={8}>
          <Flex justifyContent='center' color='red.400' pb={2}>
            <IoWarningOutline fontSize='56px' />
          </Flex>
          <pre
            style={{
              whiteSpace: 'normal',
              maxWidth: '100%',
              overflow: 'scroll',
            }}
          >
            {JSON.stringify(error)}
          </pre>
        </ModalBody>
        <ModalFooter>
          <Button
            isFullWidth
            bg='red.400'
            onClick={closeModal}
            _hover={{ bg: 'red.300' }}
            _active={{ bg: 'red.300' }}
          >
            Dismiss
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TxErrorModal;
