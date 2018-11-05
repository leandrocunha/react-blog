import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';

const slideIn = keyframes`
  0% {
    right: -400px;
  }
  100% {
    right: 10px;
  }
`;

const Wrapper = styled.div`
  animation: ${slideIn} 0.25s cubic-bezier(0, 0, 0.2, 1);
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px 1px rgba(60, 64, 67, 0.2),
    0 2px 8px 4px rgba(60, 64, 67, 0.1);
  position: fixed;
  top: 10px;
  right: 10px;
  min-height: 100px;
  padding: 15px;
  width: 350px;
  z-index: 50;
`;

const Close = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  height: 31px;
  padding: 3px 0 0 0;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 31px;

  &:hover {
    background-color: rgba($black, 0.05);
  }
`;

const Title = styled.p`
  color: rgba(0, 0, 0, 0.8);
  font-size: 18px;
  font-weight: 700;
  margin: 10px;
  max-width: 80%;
  text-align: left;
`;

const Message = styled.p`
  color: rgba(0, 0, 0, 0.8);
  font-size: 16px;
  margin: 10px;
  max-width: 80%;
  text-align: left;
`;

class Notifier extends Component {
  constructor(props) {
    super(props);

    /** Bind function to close notifier. */
    this.close = this.close.bind(this);
  }

  /**
   * @function close Close notifier setting handle variable to false on local state
   * and dispatch action to remove component from the DOM.
   */
  close() {
    const { dispatch } = this.props;
    dispatch({ type: 'NOTIFIER/CLOSE' });
  }

  render() {
    const { notifier } = this.props;

    return notifier.show ? (
      <Wrapper>
        <Close onClick={this.close} type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path fill="transparent" d="M0 0h24v24H0z" />
            <path
              fill="#ccc"
              d="M20.707 4.707l-1.414-1.414L12 10.586 4.707 3.293 3.293 4.707 10.586 12l-7.293 7.293 1.414 1.414L12 13.414l7.293 7.293 1.414-1.414L13.414 12z"
            />
          </svg>
        </Close>
        <Title>{notifier.title}</Title>
        <Message>{notifier.message}</Message>
      </Wrapper>
    ) : null;
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Notifier);
