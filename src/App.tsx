import React from 'react';
import { Flex } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import GlobalLoadingIndicator from './components/shared/GlobalLoadingIndicator';
import UnderConstruction from './components/UnderConstruction';
function App() {
  return (
    <>
      <Flex
        minHeight='100vh'
        flexDirection='column'
        bg='gray.900'
        overflow='hidden'
      >
        <BrowserRouter>
          <GlobalLoadingIndicator />
          <UnderConstruction />
        </BrowserRouter>
      </Flex>
    </>
  );
}

export default App;
