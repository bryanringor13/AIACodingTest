import React from 'react';
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'styled-components/native';
import Home from '../../src/screens/home/Home';
import {currentTheme} from '../../src/theme/custom';

global.fetch = jest.fn(() => new Promise(resolve => resolve()));

describe('Home Screen', () => {
  it('renders <Home /> correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={currentTheme}>
          <Home />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
