import {SafeAreaView} from 'react-native';
import React from 'react';
import Assesment from './Assesment';
import {HomeProvider} from '../../hooks/home';
import Challenges from './Challenges';
import Logout from './Logout';

const Home = () => {
  return (
    <HomeProvider>
      <SafeAreaView>
        <Logout />
        <Assesment />
        <Challenges />
      </SafeAreaView>
    </HomeProvider>
  );
};

export default Home;
