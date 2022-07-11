/* eslint-disable react/react-in-jsx-scope */
import React, {createContext, useContext} from 'react';

// Images
// assessment
import screening from '../../res/images/assesments/medicine_list.png';
import medBottle from '../../res/images/assesments/medicine_bottle.png';

// challengees
import running from '../../res/images/challenges/running.png';
import noSugar from '../../res/images/challenges/no_sugar.png';

const initialState = {
  assessment: {
    data: [
      {
        id: '0001',
        source: screening,
        title: 'Advanced Health Screening',
        pts: 1000,
      },
      {
        id: '0002',
        source: medBottle,
        title: 'Medicine Maintenance',
        pts: 50,
      },
    ],
    loading: true,
  },
  challenges: {
    data: [
      {
        id: '0001',
        source: noSugar,
        title: 'Say no to sugar',
        remaining: 6,
        pts: 1000,
      },
      {
        id: '0002',
        source: running,
        title: '5km challenge',
        pts: 50,
      },
    ],
    loading: true,
  },
};

export const HomeContext = createContext(initialState);
export const HomeData = () => useContext(HomeContext);

export const HomeProvider = ({children}) => {
  return (
    <HomeContext.Provider value={initialState}>{children}</HomeContext.Provider>
  );
};
