import React from 'react';
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'styled-components/native';
import {Content} from '../../src/components';
import {currentTheme} from '../../src/theme/custom';
import {SCREEN_WIDTH} from '../../src/utils/constant';

global.fetch = jest.fn(() => new Promise(resolve => resolve()));

describe('Assessment Card Component', () => {
  const width = SCREEN_WIDTH * 0.7;
  const assessmentWPtsData = {
    id: '0001',
    title: 'Advanced Health Screening',
    pts: 99999,
  };

  const assessmentWOPtsData = {
    id: '0001',
    title: 'Advanced Health Screening',
  };

  it('With 99999 points property', () => {
    const withPts = renderer
      .create(
        <ThemeProvider theme={currentTheme}>
          <Content item={assessmentWPtsData} {...{width}} />
        </ThemeProvider>,
      )
      .toJSON();
    expect(withPts).toMatchSnapshot();
  });

  it('Without points property', () => {
    const withoutPts = renderer
      .create(
        <ThemeProvider theme={currentTheme}>
          <Content item={assessmentWOPtsData} {...{width}} />
        </ThemeProvider>,
      )
      .toJSON();
    expect(withoutPts).toMatchSnapshot();
  });
});
