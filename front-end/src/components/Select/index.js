import React from 'react';

import { Container, Label, SelectStyle } from './styles';

const Select = ({
  value = "",
  label,
  name,
  children,
  ...props
}) => (
  <Container>
    <SelectStyle
      name={name}
      id={name}
      value={value}
      onChange={props.handleChange}
    >
      {children}
    </SelectStyle>

    {label && (
      <Label value={value} htmlFor={name}>{label}</Label>
    )}
  </Container>
);

export default Select;
