import React, { FC } from 'react';
import { Box, Center, Spinner, Text } from '@chakra-ui/react';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';

type Props = {
  message?: string;
};

const TxPendingApprovalModal: FC<Props> = ({ message }) => {
  return (
    <>
      <Modal isOpen={true} onClose={() => null}>
        <ModalOverlay />
        <ModalContent borderRadius='xl'>
          <ModalHeader textAlign='center'>Waiting for confirmation</ModalHeader>
          <ModalBody>
            <Center my={8}>
              <Spinner width={24} height={24} />
            </Center>
            <Box textAlign='center' color='orange.200' my={4}>
              <Text>
                {message ? message : 'Confirm this transaction in your wallet'}
              </Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TxPendingApprovalModal;
