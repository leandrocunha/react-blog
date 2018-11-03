import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import api from './api';
import Loading from './Loading';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  margin: 20px 0 0 0;
`;

const Avatar = styled.img`
  border-radius: 4px;
  margin: 0 12px 0 0;
`;

const Email = styled.p`
  color: rgba(1, 22, 39, 0.6);
  font-size: 12px;
  font-weight: 400;
  text-transform: lowercase;
`;

const Name = styled.p`
  font-size: 14px;
`;

class Author extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    const { id } = this.props;
    api
      .author(id)
      .then(res =>
        setTimeout(
          () => this.setState({ loading: false, author: { ...res } }),
          800
        )
      );
  }

  render() {
    const { author, loading } = this.state;

    return (
      <Wrapper>
        {loading ? (
          <Loading size="small" />
        ) : (
          <Fragment>
            <Avatar
              alt={author.name}
              src={`https://api.adorable.io/avatars/20/${author.email}.png`}
            />
            <div>
              <Name>{author.name}</Name>
              <Email>{author.email}</Email>
            </div>
          </Fragment>
        )}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Author);
