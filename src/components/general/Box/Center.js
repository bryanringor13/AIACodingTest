import React from 'react';
import {BoxCenter} from './styles';

const Center = ({children, imageWidth}) => {
  return <BoxCenter {...{imageWidth}}>{children}</BoxCenter>;
};

export default Center;
