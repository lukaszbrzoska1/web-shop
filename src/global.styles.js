import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html {
  margin: 0 auto;
  max-width: min(80vw)
}
  body {
    font-family: 'Open Sans Condensed', sans-serif;
    padding: 20px 60px;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
}
`;

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  background: '#FAFAFA',
};
export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  background: 'hsl(210deg, 30%, 8%)',
};
