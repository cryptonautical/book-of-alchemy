import { FC } from 'react';
import {
  Container,
  HStack,
  Link as ChakraLink,
  useMediaQuery
} from '@chakra-ui/react';
import {Box} from "@chakra-ui/layout";

const Footer: FC = () => {
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');

  return (
      <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>
        <Container maxW='container.xl' py={8} zIndex={3}>
          {isLargerThan992 && (
              <HStack justifyContent='center' spacing={4} color='orange.400' mt={2}>
                <ChakraLink
                    isExternal
                    href='https://twitter.com/bookofalchemy_'
                >
                  Twitter
                </ChakraLink>
                <ChakraLink isExternal href='https://discord.gg/bNDtj4Fz'>
                  Discord
                </ChakraLink>
                <ChakraLink
                    isExternal
                    href='https://youtube.com'
                >
                  Youtube
                </ChakraLink>
              </HStack>
          )}
        </Container>
      </Box>
  );
};

export default Footer;
