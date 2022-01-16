import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body { 
    font-family: ${({ theme }) => theme.generalStyles.fontFamilyRoboto} ;
    background-color: ${({ theme }) => theme.backgroundColor};
     color: ${({ theme }) => theme.textColor};

  }
  h1,
  h2,
  p {
  margin: 0;}

  ul {
  padding-left: 0;
  list-style: none;
};

`;
