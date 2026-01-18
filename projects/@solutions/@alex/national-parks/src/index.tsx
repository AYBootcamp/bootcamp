// import Roboto fonts
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components'

import App from './App'
import { store } from './redux/store'
import theme from './theme'

// Global style we'd like to apply
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0; 
    font-family: Roboto, Open-Sans, Helvetica, Sans-Serif;
    background-color: ${theme.palette.grey.A200}
  }
`

// App entry point
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
)
