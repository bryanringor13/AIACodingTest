import React from 'react';
import {Content, Card} from '../../components';
import {SCREEN_WIDTH} from '../../utils/constant';
import {HomeData} from '../../hooks/home';
import {FlatList} from 'react-native';

const width = SCREEN_WIDTH * 0.7;

const Assesment = () => {
  const {assessment} = HomeData();
  return (
    <Card title="Assesments" {...{width}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={assessment.data}
        renderItem={({item}) => <Content dir="row" {...{item, width}} />}
        keyExtractor={item => item.id}
      />
    </Card>
  );
};

export default Assesment;
