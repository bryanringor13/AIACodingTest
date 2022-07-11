import React, {forwardRef} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

const BottomModal = forwardRef(({children, ...res}, ref) => {
  return (
    <BottomSheet {...{ref}} {...res}>
      {children}
    </BottomSheet>
  );
});

export default BottomModal;
