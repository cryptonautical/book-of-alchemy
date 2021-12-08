import { useEffect, useState } from 'react';
import { Flex, Spinner, useToast, Link } from '@chakra-ui/react';
import { useWeb3React } from '../../hooks/web3';
import { Image, Text } from '@chakra-ui/react';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { injectedConnector } from '../../connectors';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { PortisConnector } from '@web3-react/portis-connector';
import GradientBackground from '../shared/GradientBackground';

type Props = {
  connector: AbstractConnector;
  title: string;
  src: string;
};

const WalletSelectorBox = ({ connector, title, src }: Props) => {
  const toast = useToast();
  const { connector: activeConnector, activate, deactivate } = useWeb3React();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (activeConnector === connector) {
      setIsLoading(false);
    }
  }, [activeConnector, connector]);

  const resetConnection = async () => {
    if (connector instanceof WalletConnectConnector) {
      connector.close();
      connector.walletConnectProvider = undefined;
      localStorage.removeItem('walletconnect');
    }
    if (connector instanceof WalletLinkConnector) {
      connector.close();
    }
    if (connector instanceof PortisConnector) {
      connector.close();
    }
  };

  const handleConnect = async () => {
    setIsLoading(true);
    try {
      activate(connector, (err) => {
        if (!err) {
          setIsLoading(false);
        } else {
          toast({
            description: err.message || 'Something went wrong',
            status: 'error',
            duration: 4000,
            isClosable: true
          });
          setIsLoading(false);
        }
      });
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const handleDisconnect = async () => {
    resetConnection();
    deactivate();
  };

  const isActive = activeConnector === connector;

  return (
    <GradientBackground visible={isActive} borderRadius='xl'>
      <Flex
        bg='gray.800'
        height='130px'
        alignItems='center'
        direction='column'
        onClick={isActive ? undefined : handleConnect}
        borderRadius='xl'
        borderWidth='1px'
        _hover={{
          backgroundColor: 'gray.700',
          cursor: 'pointer'
        }}
      >
        <Image
          ignoreFallback
          margin='auto'
          mt={5}
          mb={2}
          w={12}
          h={12}
          src={src}
        />
        <Text textAlign='center'>
          {title}
          {isLoading && <Spinner size='sm' ml={2} />}
        </Text>
        {/* @ts-ignore */}
        {!(window.web3 || window.ethereum) && connector === injectedConnector && (
          <Link
            isExternal
            fontSize='sm'
            color='cyan.500'
            href='https://metamask.io/'
            onClick={(e) => e.stopPropagation()}
          >
            Install Metamask
          </Link>
        )}
        {isActive && !(activeConnector === injectedConnector) && (
          <Text fontSize='sm' textColor='gray.400' onClick={handleDisconnect}>
            Disconnect
          </Text>
        )}
      </Flex>
    </GradientBackground>
  );
};

export default WalletSelectorBox;
