import React, { Fragment } from 'react';
import reset from 'styled-reset';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './Home';
import Post from './Post';

const GlobalStyle = createGlobalStyle`
  ${reset}
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
