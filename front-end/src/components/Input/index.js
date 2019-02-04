import React from 'react';
import PropTypes from 'prop-types';

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

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string,
  autoFocus: PropTypes.bool,
  active: PropTypes.bool,
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func.isRequired
};

export default Input;
