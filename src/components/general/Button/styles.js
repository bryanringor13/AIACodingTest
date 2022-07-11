import {TouchableOpacity} from '@gorhom/bottom-sheet';
import styled from 'styled-components/native';

export const ButtonWrapper = styled(TouchableOpacity)`
  border-radius: 5px;
  background-color: #24a0ed;
  padding: 10px;
  align-items: center;
  justify-content: center;
  width: 250px;
`;

export const ButtonTextWrapper = styled.Text`
  text-align: center;
  font-size: 14px;
  color: #ffffff;
`;
