import styled from 'styled-components/native';

export const TextWrapper = styled.Text`
  font-size: ${({size, theme}) =>
    size ? theme.fontSize[size] : theme.fontSize.sm};
  ${({variant, theme}) => variant && `color: ${theme.color[variant]};`}
  ${({bold}) => bold && 'font-weight: bold;'}
  font-color: #000000;
`;
