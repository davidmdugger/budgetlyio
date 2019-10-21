import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme/theme'
import GlobalStyles from './theme/GlobalStyles'

const Heading = styled.h1`
  color: ${({ theme: { colors } }) => colors.primary};
  font-family: ${({ theme: { fonts } }) => fonts.heading};
`

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyles />
      <Heading>APP</Heading>
    </div>
  </ThemeProvider>
)

export default App;
