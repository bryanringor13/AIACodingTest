/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ThemeProvider} from 'styled-components';
import {UserProvider} from './src/hooks';
import {RouterNavigator} from './src/navigation/Routes';
import {currentTheme} from './src/theme/custom';
import {GestureHandlerRootViewWrapper} from './styles';

const App = () => {
  return (
    <ThemeProvider theme={currentTheme}>
      <UserProvider>
        <GestureHandlerRootViewWrapper>
          <RouterNavigator />
        </GestureHandlerRootViewWrapper>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
