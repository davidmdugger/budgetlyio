import * as React from 'react';

interface Props {
  children: React.ReactNode
  handleSubmit: (e: React.FormEvent) => void
  isValid: () => boolean
}

export default ({ children, handleSubmit, isValid }: Props): React.ReactElement => (
  <form onSubmit={handleSubmit}>
    {children}
    <input disabled={!isValid()} type="submit" value="Add To Budget" />
  </form>
)