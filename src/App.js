import React from 'react';
import RouterApp from "./Router/Router";
import { ThemeProvider } from 'styled-components';
import { configTheme } from './utils/theme/configTheme';
import './App.css';

function App() {
    return (
        <ThemeProvider theme={configTheme}>
            <RouterApp />
        </ThemeProvider>
    );
}

export default App;


