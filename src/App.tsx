import React from 'react';
import { Flex } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import GlobalLoadingIndicator from './components/shared/GlobalLoadingIndicator';
import NftDisplay from './components/NftDisplay';
import Header from './components/layout/Header';
import { useEagerConnect } from './hooks/web3';
import ModalRoot from './components/modals/ModalRoot';

function App() {
  useEagerConnect();

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
          <ModalRoot />
          <Header />
          <NftDisplay />
        </BrowserRouter>
      </Flex>
    </>
  );
}

export default App;
