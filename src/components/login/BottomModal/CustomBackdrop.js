import React from 'react';
import {BottomSheetBackdrop} from '@gorhom/bottom-sheet';

const CustomBackdrop = props => {
  return <BottomSheetBackdrop {...props} disappearsOnIndex={-1} />;
};

export default CustomBackdrop;
