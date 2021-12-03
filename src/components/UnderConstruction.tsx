import { FC } from 'react';
import { VStack, Img, Link, Button } from '@chakra-ui/react';

const UnderConstruction: FC = () => {

  return (
    <VStack>
      <Img src='https://cdn.discordapp.com/attachments/908714831945818152/916377119808970822/boa.png' />
      <Button>
        <Link rel='noopener noreferrer' target='_blank' href='https://discord.gg/KrAy9Hjx' >
          Join the conversation in Discord
        </Link>
      </Button>

    </VStack>
  )
}

export default UnderConstruction;
