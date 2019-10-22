import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme'
import GlobalStyles from './theme/GlobalStyles'
import Home from './containers/Budget'

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyles />
      <Home />
    </div>
  </ThemeProvider>
)

export default App;
