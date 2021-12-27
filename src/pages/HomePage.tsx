import { FC } from 'react';
import {Grid, GridItem, Image,Text, useMediaQuery, VStack} from "@chakra-ui/react";
import sidebar_art from "../img/sidebar_art.png"
import boa_logo from "../img/boa-logo.png"
import {Link as ChakraLink } from "@chakra-ui/react";

const HomePage: FC = () => {
    const [isLargerThan992] = useMediaQuery('(min-width: 992px)');

    return(
        <>
            <Grid gridTemplateColumns={isLargerThan992 ? '280px 1fr' : '1fr'} gap={2}>
                <GridItem>
                    <Image src={sidebar_art}/>
                </GridItem>

            <VStack>
                <Image src={boa_logo} margin='auto'/>
                <Text > Welcome to the Book of Alchemy. We’re creating an NFT card game
                    where your alchemist battles against
                    monsters to save the realm. Use your ALCH or BoA NFT to play.
                    <ChakraLink
                        isExternal
                        href='https://opensea.io/collection/weapons-book-of-alchemy'
                    >
                        {'Get a custom weapon, '}
                    </ChakraLink>
                    or
                     <ChakraLink
                        isExternal
                        href=''
                    >
                         {' borrow one '}
                    </ChakraLink>
                    of ours.
                    The alpha version of the Book of Alchemy NFT game is in active development. Sign up.
                </Text>
            </VStack>
            </Grid></>
    )
}

export default HomePage;
