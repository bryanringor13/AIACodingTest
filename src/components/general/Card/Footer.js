import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  CardFooter,
  CardLeftFooter,
  CardRightFooter,
  CardTextGray,
  CardTextPtsFooter,
} from './styles';

const Footer = ({pts}) => {
  return (
    <CardFooter>
      <CardLeftFooter>
        <CardTextGray>
          Earn up to <CardTextPtsFooter>{pts}</CardTextPtsFooter> pts
        </CardTextGray>
      </CardLeftFooter>
      <CardRightFooter>
        <Icon name="arrowright" size={18} color="rgb(123,32,76)" />
      </CardRightFooter>
    </CardFooter>
  );
};

export default Footer;
