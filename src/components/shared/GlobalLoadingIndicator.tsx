import { Box } from '@chakra-ui/layout';
import { Progress } from '@chakra-ui/react';
import { useIsFetching } from 'react-query';

const GlobalLoadingIndicator = () => {
  const isFetching = useIsFetching();

  if (!!isFetching) {
    return (
      <Box position='absolute' width='100%' left={0} top={0}>
        <Progress size='xs' isIndeterminate />
      </Box>
    );
  } else {
    return null;
  }
};

export default GlobalLoadingIndicator;
