import React from 'react';

import styles from './Event.module.scss';
import { Link } from 'react-router-dom';

const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>NEW</Link>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/:id`}>ID</Link>
  </div>
);

export default Waiter;