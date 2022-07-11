import React from 'react';
import {View} from 'react-native';
import {ImageAssIcon} from '../..';
import Center from '../Box/Center';
import Footer from './Footer';
import {CardContent, CardDescription, CardHeader, CardTextGray} from './styles';

const Content = ({item, width, dir}) => {
  width = width * 0.5;
  const imageWidth = (!dir || dir === 'column') && width;
  const {source, title, remaining, pts} = item;
  const pointsDisplay = () => <Footer {...{pts}} />;

  return (
    <CardContent {...{dir}}>
      {source && (
        <Center {...{imageWidth}}>
          <ImageAssIcon {...{source}} />
        </Center>
      )}
      <CardDescription {...{width, dir}}>
        <View>
          {title && <CardHeader {...{dir}}>{title}</CardHeader>}
          {remaining && <CardTextGray>{remaining} days left</CardTextGray>}
        </View>
        {pts && pointsDisplay()}
      </CardDescription>
    </CardContent>
  );
};

export default Content;
