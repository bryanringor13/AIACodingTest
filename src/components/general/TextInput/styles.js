import {BottomSheetTextInput} from '@gorhom/bottom-sheet';
import styled from 'styled-components/native';

export const InputTextWrapper = styled.View`
  flex-direction: row;
  width: 250px;
  height: 50px;
  overflow: hidden;
  align-items: center;
  border-radius: 5px;
  border-width: 1px;
  border-color: #000000;
  padding: 5px;
`;

export const InputTextField = styled(BottomSheetTextInput)`
  width: 100%;
`;
