import React, { Component, Fragment } from 'react';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import api from './api';
import { preview } from './utils';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, limit: 10 };
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    api.posts().then(res => this.setState({ loading: false, posts: res }));
  }

  loadMore() {
    const { limit } = this.state;
    const newLimit = limit + 10;

    api
      .posts(newLimit)
      .then(res => this.setState({ posts: res, limit: newLimit }));
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
          <Fragment>
            {posts.map(post => (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{preview(post.body)}</p>
                <div>
                  <p>{post.userId}</p>
                </div>
              </div>
            ))}
            <button onClick={this.loadMore}>load more</button>
          </Fragment>
        )}
      </div>
    );
  }
}

export default App;
