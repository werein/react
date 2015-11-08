import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { loadApp } from '../actions/app';

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    loaded: PropTypes.bool
  }

  componentDidMount() {
    this.props.dispatch(loadApp());
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default connect(state => ({...state, loaded: state.app.loaded}))(App);
