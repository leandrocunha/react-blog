import React, { Component } from 'react';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;
class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <h1>Hello, world!</h1>
      </div>
    );
  }
}

export default App;
