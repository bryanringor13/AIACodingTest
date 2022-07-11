import React from 'react';
import {ImageWrapper} from './styles';

const Image = props => {
  return <ImageWrapper resizeMode="contain" {...props} />;
};

export default Image;
