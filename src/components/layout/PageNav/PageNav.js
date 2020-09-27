import React from 'react';
import { NavLink } from 'react-router-dom';
// import styles from './PageNav.module.scss';

const PageNav = () => (

  <nav>
    <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables Status</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/waiterview`} activeClassName='active'>Waiter Menu</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/kitchenview`} activeClassName='active'>Kitchen Menu</NavLink>
  </nav>
);

export default PageNav;

