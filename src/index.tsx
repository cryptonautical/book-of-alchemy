import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from './helpers/library';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from './theme';
import { GlobalStyles } from './theme/styles/global-styles';
import { Global } from '@emotion/react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store/store';
import { ReactQueryDevtools } from 'react-query/devtools';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchInterval: false,
            staleTime: Infinity
        }
    }
});

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary} >
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <ReduxProvider store={store}>
                <ChakraProvider theme={customTheme}>
                    <Global styles={GlobalStyles} />
                    <App />
                </ChakraProvider>
            </ReduxProvider>
        </QueryClientProvider>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
