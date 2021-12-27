import { FC } from 'react';
import { Flex } from '@chakra-ui/layout';
import {
  Container,
  HStack,
  Text,
  Link as ChakraLink
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@chakra-ui/react';
import UserWallet from '../connectWallet/UserWallet';

const Header: FC = () => {
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');

  return (
    <Container maxW='container.xl' py={[4, 4, 4, 8]}>
      <Flex justifyContent='space-between' flexGrow={1}>
        <HStack alignItems='center'>

          {isLargerThan992 && (
            <HStack spacing={6}>
              <ChakraLink
                as={Link}
                fontWeight='medium'
                to='/'
              >
                <Text>Home</Text>
              </ChakraLink>
              <ChakraLink
                  as={Link}
                  fontWeight='medium'
                  to='/'
              >
                <Text>Get ALCH</Text>
              </ChakraLink>
              <ChakraLink
                  as={Link}
                  fontWeight='medium'
                  to='/'
              >
                <Text>Get Lore</Text>
              </ChakraLink>
              <ChakraLink
                  isExternal
                  href='https://opensea.io/collection/weapons-book-of-alchemy'
              >
                <Text>Get Weapon</Text>
              </ChakraLink>
              <ChakraLink
                  isExternal
                  href='https://forms.gle/aEQyi6sr1o2aTk666'
              >
                <Text>Sign up for alpha</Text>
              </ChakraLink>
              <ChakraLink
                  as={Link}
                  fontWeight='medium'
                  to='/nft-display'
              >
                <Text>Nft Display</Text>
              </ChakraLink>
            </HStack>
          )}
        </HStack>
        <HStack>
          <UserWallet />
        </HStack>
      </Flex>
    </Container>
  );
};

export default Header;
