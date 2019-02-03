import React from 'react';

import { Container, Label, InputStyle } from './styles';

const Input = ({
  value = '',
  label,
  name,
  type = 'text',
  autoFocus,
  children,
  ...props
}) => (
  <Container>
    <InputStyle
      name={name}
      id={name}
      type={type}
      value={value}
      onChange={props.handleChange}
      autoFocus={autoFocus}
    />

    {label && (
      <Label value={value} htmlFor={name}>{label}</Label>
    )}

    {children}
  </Container>
);

export default Input;
