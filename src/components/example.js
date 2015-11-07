import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { INDEX } from '../actions.js'
import styles from './example.css';

class Example extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    completed: PropTypes.bool,
  };

  componentDidMount() {
    this.props.dispatch({type: INDEX});
  }

  render() {
    return (
      <div className={styles.example}>
        { this.props.completed }
      </div>
    );
  }
};

export default connect(state => ({...state, completed: state.completed}))(Example);
