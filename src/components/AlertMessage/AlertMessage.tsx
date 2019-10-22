import * as React from 'react';
import styled from 'styled-components';

const AlertWrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.alert};
  color: ${({ theme: { colors } }) => colors.white};
  padding: 10px 0;
  text-align: center;
`

interface Props {
  message: string
}

export default React.forwardRef(({ message }: Props, ref: React.Ref<HTMLDivElement>): React.ReactElement => {
  return (
    <AlertWrapper role="alert" ref={ref} tabIndex={-1}>
      {message}
    </AlertWrapper>
  )
})