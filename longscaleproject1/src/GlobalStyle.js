import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 *, ::before, ::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
 }

 body {
  background-color: #fff;
  color: #102a42;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 }

 p {
  color: #324d67;
 }


`
