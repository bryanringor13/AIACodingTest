import React, {forwardRef, useMemo} from 'react';
import Box from '../Box';
import Text from '../Text';
import {InputTextField, InputTextWrapper} from './styles';

const TextInput = forwardRef(({label, ...res}, ref) => {
  const inputLabelHandler = useMemo(() => {
    return (
      <Box>
        <Text>{label}</Text>
      </Box>
    );
  }, [label]);
  return (
    <InputTextWrapper>
      {label && inputLabelHandler}
      <InputTextField {...res} {...{ref}} />
    </InputTextWrapper>
  );
});

export default TextInput;
