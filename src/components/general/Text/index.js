import React from 'react';
import {TextWrapper} from './styles';

const Text = ({children, size, bold, variant}) => {
  return <TextWrapper {...{size, bold, variant}}>{children}</TextWrapper>;
};

export default Text;
