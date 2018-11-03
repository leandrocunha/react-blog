import React, { Fragment } from 'react';
import reset from 'styled-reset';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './Home';
import Post from './Post';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800');
  
  ${reset}

  * {
    box-sizing: border-box;
  }

  body{
    background-color: #eef2f5;
    color: rgba(1, 22, 39, 0.8);
    font-family: 'Open Sans', sans-serif;
    line-height: 1.4;
  }

  a { color: #e9003f; text-decoration: none; }
`;

const App = () => (
  <Router>
    <Fragment>
      <GlobalStyle />
      <Route exact path="/" component={Home} />
      <Route path="/post/:id" component={Post} />
    </Fragment>
  </Router>
);

export default App;
