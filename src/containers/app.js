import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './app.css';
import { loadApp } from 'actions/app';

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(loadApp());
  }

  render() {
    return (
      <div className={styles.container}></div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  loaded: PropTypes.bool
};

export default connect(state => ({ ...state, loaded: state.app.loaded }))(App);
