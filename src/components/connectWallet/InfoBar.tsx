import {
    useClipboard,
    HStack,
    Tooltip,
    useToast,
    Text,
    Link,
    IconButton
} from '@chakra-ui/react';
import {useWeb3React} from '../../hooks/web3';
import {getAddress} from 'ethers/lib/utils';
import {useConnectedWalletName} from '../../hooks/useConnectedWalletName';
import {useEffect} from 'react';
import {BiLinkExternal} from 'react-icons/bi';
import {FiCopy} from 'react-icons/fi';
import {truncate} from '../../utils/address';
import {getEtherscanLink, EtherscanLinkType} from '../../utils/getEtherscanLink';
import NetworkPill from './NetworkPill';

const ConnectedWalletInfoBar = () => {
    const toast = useToast();
    const {account, chainId} = useWeb3React();
    const {hasCopied, onCopy} = useClipboard(account || '');
    const walletName = useConnectedWalletName();

    useEffect(() => {
        if (hasCopied) {
            toast({
                title: `Copied ${walletName} address`,
                status: 'info',
                duration: 4000,
                isClosable: true,
            });
        }
    }, [hasCopied, toast, walletName]);

    return (
        <HStack
            h='50px'
            mb={5}
            px={2}
            border='1px'
            borderRadius='xl'
            borderColor='gray.700'
            justifyContent='space-between'
        >
            <HStack alignItems='center'>


                <Text fontSize='lg'>{truncate(getAddress(account!))}</Text>
                <Tooltip label='Copy Address' placement='top' hasArrow>
                    <IconButton
                        isRound
                        size='sm'
                        bg='whiteAlpha.50'
                        variant='ghost'
                        aria-label='copy'
                        onClick={onCopy}
                        icon={<FiCopy/>}
                    />
                </Tooltip>
                <Tooltip label='View Etherscan' placement='top' hasArrow>
                    <IconButton
                        isRound
                        size='sm'
                        bg='whiteAlpha.50'
                        variant='ghost'
                        aria-label='copy'
                        onClick={onCopy}
                        icon={<BiLinkExternal/>}
                        as={Link}
                        isExternal
                        href={getEtherscanLink(
                            chainId,
                            account || '',
                            EtherscanLinkType.ADDRESS
                        )}
                    />
                </Tooltip>
            </HStack>
            {chainId !== 1 && <NetworkPill size='lg' borderRadius='lg'/>}
        </HStack>
    );
};

export default ConnectedWalletInfoBar;
