import React, { Component, Fragment } from 'react';
import api from '../api';
import { connect } from 'react-redux';
import Header from './Header';
import Loading from './Loading';
import Posts from './Posts';
import actions from './../actions';

class Home extends Component {
  constructor(props) {
    super(props);

    /** Set state with default values.
     * @param {number} limit
     * @param {bool} loading
     */
    this.state = { loading: true, limit: 10 };

    /** Bind function to load more posts */
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    /** Call api to get posts */
    api.posts().then(res => {
      dispatch(actions.posts.list(res));
      this.setState({ loading: false });
    });
  }

  /**
   * @function loadMore Incrise local state limit and get more posts
   */
  loadMore() {
    const { dispatch } = this.props;
    const { limit } = this.state;
    const newLimit = limit + 10;

    api.posts(newLimit).then(res => {
      dispatch(actions.posts.list(res));
      setTimeout(() => this.setState({ limit: newLimit, loading: false }), 800);
    });
  }

  render() {
    const { loading } = this.state;
    const { posts } = this.props;

    return (
      <Fragment>
        <Header />
        {loading ? (
          <Loading />
        ) : (
          <Posts posts={posts.list} onClick={this.loadMore} />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Home);
