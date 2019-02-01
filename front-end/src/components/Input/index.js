import React from 'react';

import { Container, Label, InputStyle } from './styles';

const Input = ({
  value = '',
  label,
  name,
  type = 'text',
  ...props
}) => (
  <Container>
    <InputStyle name={name} id={name} type={type} value={value} onChange={props.handleChange} />

    {label && (
      <Label value={value} htmlFor={name}>{label}</Label>
    )}
  </Container>
);

export default Input;
