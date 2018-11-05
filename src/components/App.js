import React, { Fragment } from 'react';
import reset from 'styled-reset';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './Home';
import Notifier from './Notifier';
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

  input[type=text],
  textarea {
    background-color: rgba(1, 22, 39, 0.08);
    border: none;
    border-radius: 4px;
    color: rgba(1, 22, 39, 0.8);
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    line-height: 1.4;
    margin: 0 0 15px 0;
    padding: 15px;
    width: 100%;
  }
`;

const App = () => (
  <Router>
    <Fragment>
      <GlobalStyle />
      <Route exact path="/" component={Home} />
      <Route path="/post/:id" component={Post} />
      <Notifier />
    </Fragment>
  </Router>
);

export default App;
