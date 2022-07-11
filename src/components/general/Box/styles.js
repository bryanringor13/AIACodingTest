import styled from 'styled-components/native';

export const BoxContainer = styled.View`
  padding: 5px;
  margin: 5px;
`;

export const BoxCenter = styled.View`
  ${({imageWidth}) => imageWidth && `width: ${imageWidth}px;`}
  justify-content: center;
  align-items: center;
`;
