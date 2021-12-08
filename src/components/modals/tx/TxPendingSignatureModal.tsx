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
  step: number;
  totalSteps: number;
  message?: string;
};

const TxPendingSignatureModal: FC<Props> = ({ step, totalSteps }) => {
  return (
    <>
      <Modal isOpen={true} onClose={() => null}>
        <ModalOverlay />
        <ModalContent borderRadius='xl'>
          <ModalHeader textAlign='center'>Waiting for signature</ModalHeader>
          <ModalBody>
            <Center my={8}>
              <Spinner width={24} height={24} />
            </Center>
            <Box textAlign='center' color='gray.200' my={4}>
              <Text>
                Please sign signature <strong>{step}</strong> of{' '}
                <strong>{totalSteps}</strong>
              </Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TxPendingSignatureModal;
