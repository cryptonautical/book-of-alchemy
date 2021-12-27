import React from 'react';
import {Container, Flex} from '@chakra-ui/react';
import {BrowserRouter, Switch , Route } from 'react-router-dom';
import GlobalLoadingIndicator from './components/shared/GlobalLoadingIndicator';
import Header from './components/layout/Header';
import { useEagerConnect } from './hooks/web3';
import ModalRoot from './components/modals/ModalRoot';
import HomePage from "./pages/HomePage";
import Footer from "./components/layout/Footer";
import NftDisplay from "./components/NftDisplay";
import NoMatch from "./pages/NoMatch";

function App() {
  useEagerConnect();

  return (
    <>
      <Flex
        minHeight='100vh'
        flexDirection='column'
        bg='#f8ffef'
        overflow='hidden'
      >
        <BrowserRouter>
          <GlobalLoadingIndicator />
          <ModalRoot />
          <Header />
            <Container maxW='container.xl' position='relative'>
                <Switch>
                    <Route
                        exact
                        path={process.env.PUBLIC_URL + '/'}
                        component={HomePage}
                    />
                    <Route
                        exact
                        path={process.env.PUBLIC_URL + '/nft-display'}
                        component={NftDisplay}
                    />
                    <Route path='*'>
                        <NoMatch />
                    </Route>
                </Switch>

            </Container>
          <Footer />
        </BrowserRouter>
      </Flex>
    </>
  );
}

export default App;
