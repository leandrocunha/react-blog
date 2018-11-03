import React, { Component } from 'react';
import { connect } from 'react-redux';

class Author extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  render() {
    const { loading } = this.props;

    return <div>{loading ? <p>loading</p> : null}</div>;
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Author);
