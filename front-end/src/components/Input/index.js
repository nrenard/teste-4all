import React from 'react';

import { Container, Label, InputStyle } from './styles';

const Input = ({
  value = '',
  label,
  name,
  type = 'text',
  autoFocus,
  children,
  active = false,
  maxLength = "",
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
      active={active}
      maxLength={maxLength}
    />

    {label && (
      <Label value={value} htmlFor={name}>{label}</Label>
    )}

    {children}
  </Container>
);

export default Input;
