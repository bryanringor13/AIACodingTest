import styled from 'styled-components/native';

export const CardWrapper = styled.View`
  margin-vertical: 10px;
  padding-left: 5px;
`;

export const CardContainer = styled.View`
  width: 100%;
`;

export const CardTitle = styled.Text`
  margin-left: 5px;
  font-weight: bold;
  ${({theme}) => `font-size : ${theme.fontSize.md}`}
`;

export const CardHeader = styled.Text`
  ${({theme}) => `font-size : ${theme.fontSize.md}`}
  ${({dir}) =>
    (!dir || dir === 'column') &&
    `
    margin-top: 10px;
  `}
  margin-bottom: 5px;
  font-weight: bold;
`;

export const CardContent = styled.View`
  ${({dir}) => dir && `flex-direction: ${dir};`}
  align-items; center;
  ${({width}) => width};
  padding: 10px;
  elevation: 5;
  border-radius: 5px;
  margin-left: 5px;
  margin-right: 10px;
  margin-top: 10px;
  background-color: #FFFFFF;
  margin-bottom: 10px;
  shadow-offset: 2px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 5px;
`;

export const CardDescription = styled.View`
  ${({width}) => width}
  flex-direction: column;
  margin-left: 5px;
  justify-content: space-between;
  ${({dir}) =>
    (!dir || dir === 'column') &&
    `
    height: 200px;
  `}
`;

export const CardFooter = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardLeftFooter = styled.View`
  width: 60%;
`;

export const CardTextPtsFooter = styled.Text`
  color: rgb(56, 110, 157);
  font-weight: bold;
  ${({theme}) => `font-size : ${theme.fontSize.md}`}
`;

export const CardRightFooter = styled.View`
  width: 40%;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const CardTextGray = styled.Text`
  color: gray;
`;
