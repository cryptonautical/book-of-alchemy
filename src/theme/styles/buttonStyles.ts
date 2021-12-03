export const ButtonStyles = {
  baseStyle: {
    fontWeight: 'semibold',
    borderRadius: 'xl',
  },
  variants: {
    solid: {
      bg: 'green.500',
      color: 'gray.800',
      _hover: {
        bg: 'green.400',
        _disabled: {
          bg: 'green.400',
        },
      },
      _active: {
        bg: 'green.400',
      },
    },
  },
};
