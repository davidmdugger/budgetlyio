import * as React from 'react';
import styled from 'styled-components';

const TitlesWrapper = styled.div`
  text-align: center;
`

const PageTitle = styled.h1`
  font-family: ${({ theme: { fonts } }) => fonts.heading};
  color: ${({ theme: { colors } }) => colors.primary};
`

const Subtitle = styled.h4`
  color: ${({ theme: { colors } }) => colors.primary};
`

export default () => (
  <TitlesWrapper>
    <PageTitle>Budgetlyio</PageTitle>
    <Subtitle>Where you can list your budget like a boss!</Subtitle>
  </TitlesWrapper>
)