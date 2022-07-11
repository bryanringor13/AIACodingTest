import React from 'react';
import {CardContainer, CardTitle, CardWrapper} from './styles';

const CardComponent = ({children, width, title}) => {
  return (
    <CardWrapper>
      {title && <CardTitle>{title}</CardTitle>}
      <CardContainer {...{width}}>{children}</CardContainer>
    </CardWrapper>
  );
};

export default CardComponent;
