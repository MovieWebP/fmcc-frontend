import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from "./Style/theme";
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Style/Style';
import SliderTest from './Componenets/um/umm';

const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RecoilRoot>
    <QueryClientProvider client={client} >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* <App /> */}
        <SliderTest />
      </ThemeProvider>
    </QueryClientProvider>
  </ RecoilRoot >
);

