export const ButtonStyles = {
  baseStyle: {
    fontWeight: 'semibold',
    borderRadius: 'xl',
  },
  variants: {
    solid: {
      bg: 'orange.500',
      color: 'orange.800',
      _hover: {
        bg: 'orange.400',
        _disabled: {
          bg: 'orange.400',
        },
      },
      _active: {
        bg: 'green.400',
      },
    },
  },
};
