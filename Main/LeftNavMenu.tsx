import React, { Fragment } from 'react';
import PersonInfo from './PersonInfo';
import { Link } from "react-router-dom";
import ContactContainer from '../Contact/ContactContainer'

const NavList = () => {
  return <ul type="none">
    <li>
      <Link to="/contact">
        Contact
      </Link>
    </li>
    <li>
      <Link to="/your-pay">Your Pay</Link>
    </li>
    <li>
      <Link to="/Organization">Organization</Link>
    </li>
    <li>
      <Link to="/benefits">Benefits</Link>
    </li>
  </ul>
}

const LeftNavMenu = () => {
  return (
    <Fragment>
      <PersonInfo />
      {NavList()}
    </Fragment>
  )
}
export default LeftNavMenu;