import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import api from '../api';
import Button from './Button';
import Loading from './Loading';

const Form = styled.form`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin: 0 0 50px 0;

  button {
    margin: 15px 0 15px 20px !important;
  }
`;

const Footer = styled.div`
  align-items: center;
  display: flex;
`;

const ErrorMsg = styled.p`
  color: #f00;
  font-size: 12px;
`;

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();

    const { dispatch, post } = this.props;
    const email = document.querySelector('input[name=email]');
    const comment = document.querySelector('textarea[name=comment]');
    const name = document.querySelector('input[name=name]');
    const params = {
      body: comment.value,
      email: email.value,
      name: name.value,
      postId: post.id
    };

    this.setState({ loading: true, error: false, errorMsg: null });

    comment.value.length < 5
      ? this.setState({
          error: true,
          errorMsg: 'Your comment need 5 character at least.',
          loading: false
        })
      : api.commentsNew(post.id, params).then(res => {
          dispatch({ type: 'COMMENTS/NEW', data: res });
          dispatch({
            type: 'NOTIFIER/SHOW',
            data: {
              title: 'Hooray!',
              message: 'Your comment was posted with success.'
            }
          });
          this.setState({ loading: false });
        });
  }

  render() {
    const { error, errorMsg, loading } = this.state;

    return (
      <Form onSubmit={this.submit}>
        <input required name="name" placeholder="Your name" type="text" />
        <input required name="email" placeholder="Your email" type="text" />
        <textarea
          required
          name="comment"
          placeholder="Your comments"
          rows="6"
        />
        <Footer>
          {loading && <Loading size="small" />}
          {error && <ErrorMsg>{errorMsg}</ErrorMsg>}
          <Button disabled={loading} label="post comment" />
        </Footer>
      </Form>
    );
  }
}

const mapStateToProps = state => ({ post: state.posts.post });

export default connect(mapStateToProps)(CommentForm);
