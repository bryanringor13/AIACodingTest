import React from 'react';
import {ButtonTextWrapper, ButtonWrapper} from './styles';

const Button = ({title, ...props}) => {
  return (
    <ButtonWrapper {...props}>
      <ButtonTextWrapper>{title}</ButtonTextWrapper>
    </ButtonWrapper>
  );
};

export default Button;
