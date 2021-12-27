export const ButtonStyles = {
  baseStyle: {
    fontWeight: 'semibold',
    borderRadius: 'xl',
  },
  variants: {
    solid: {
      bg: 'orange.500',
      color: 'orange.300',
      _hover: {
        bg: 'orange.100',
        _disabled: {
          bg: 'orange.400',
        },
      },
      _active: {
        bg: 'orange.400',
      },
    },
  },
};
