import * as React from 'react';
import styled from 'styled-components';

interface Input {
  isError?: boolean
}

const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0;
  width: 100%;
  max-width: 300px;
`

const Label = styled.label`
  font-size: 12px;
`

const Input = styled.input<Input>`
  border-color: ${({ isError }) => isError ? "red" : "inherit"};
  width: 100%;
`

const ErrorMessage = styled.span`
  color: ${({ theme: { colors } }) => colors.alert};
  font-size: 10px;
`

interface Props {
  type: string;
  value: string | number;
  name: string;
  label: string;
  required: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  errorMsg?: string | null;
  ref: React.Ref<HTMLElement>
}

export default React.forwardRef(({ type, placeholder, name, value, onChange, onBlur, onFocus, label, errorMsg, required }: Props, ref: React.Ref<HTMLElement>): React.ReactElement => {
  const displayErrorMsg = (): React.ReactElement => <ErrorMessage ref={ref} tabIndex={-1}>{errorMsg && errorMsg}</ErrorMessage>;
  return (
    <TextInputWrapper>
      <Label htmlFor={name}>{label}</Label>
      <Input aria-required={required} type={type} placeholder={placeholder} name={name} value={value} onBlur={onBlur} onFocus={onFocus} onChange={onChange} isError={typeof errorMsg === 'string' && errorMsg.length > 0} />
      {errorMsg && displayErrorMsg()}
    </TextInputWrapper>
  )
})