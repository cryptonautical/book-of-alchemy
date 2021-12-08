import { FC } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

type Props = BoxProps & {
  visible?: boolean;
};

const GradientBackground: FC<Props> = ({ children, visible, ...rest }) => {
  return (
    <Box
      bgGradient={
        visible
          ? 'linear(to-tr, cyan.500, purple.500)'
          : 'linear(to-tr, gray.800, gray.800)'
      }
      p='1px'
      {...rest}
    >
      {children}
    </Box>
  );
};

export default GradientBackground;
