import React, { Component } from 'react';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import api from './api';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    api.posts().then(res => this.setState({ loading: false, posts: res }));
  }

  render() {
    const { loading, posts } = this.state;

    return (
      <div className="App">
        <GlobalStyle />
        <h1>Hello, world!</h1>
        {loading ? (
          <p>loading</p>
        ) : (
          posts.map(post => (
            <div>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <div>
                <p>{post.userId}</p>
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default App;
