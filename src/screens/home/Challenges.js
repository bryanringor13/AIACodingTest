import React from 'react';
import {Content, Card} from '../../components';
import {SCREEN_WIDTH} from '../../utils/constant';
import {HomeData} from '../../hooks/home';
import {FlatList} from 'react-native';

const width = SCREEN_WIDTH * 0.7;

const Challenges = () => {
  const {challenges} = HomeData();
  return (
    <Card title="Challenges" {...{width}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={challenges.data}
        renderItem={({item}) => <Content {...{item, width}} />}
        keyExtractor={item => item.id}
      />
    </Card>
  );
};

export default Challenges;
