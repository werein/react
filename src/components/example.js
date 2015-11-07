import React from 'react';
import styles from './example.css';

export default React.createClass({
  render: function() {
    return (
      <div className={styles.example}>
        Hello world!
      </div>
    );
  },
});
