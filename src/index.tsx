import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from "./Style/theme";
import { ThemeProvider } from 'styled-components';
import { Global } from "@emotion/react"

import { globalStyle } from './Style/Style';

const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RecoilRoot>
    <QueryClientProvider client={client} >
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </ RecoilRoot >
);

