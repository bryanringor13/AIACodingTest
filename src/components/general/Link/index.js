import React from 'react';
import {LinkWrapper} from './styles';

const LinkComponent = ({children, ...res}) => {
  return <LinkWrapper {...res}>{children}</LinkWrapper>;
};

export default LinkComponent;
