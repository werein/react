// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadApp } from 'actions/app';
import type { Dispatch } from 'actions/index';
import type { State } from 'reducers/index';
import styles from './app.css';

type StateProps = {
  loaded: boolean
}

type Props = StateProps & {
  dispatch: Dispatch
}

export class AppContainer extends Component<Props> {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(loadApp());
  }

  render() {
    const { loaded } = this.props;

    if (!loaded) {
      return null;
    }

    return (
      <div className={styles.container} />
    );
  }
}

function mapStateToProperties(state: State) {
  return {
    loaded: state.app.loaded
  };
}

export default connect(mapStateToProperties)(AppContainer);
