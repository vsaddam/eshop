import React from 'react'
import { NavLink } from 'react-router-dom';

const Breadcrumb = ({ title }) => {
  return (
    <div className="ps-5 single-product-breadcrum-wrapper">
      <NavLink to="/" > Home </NavLink> / {title}
    </div>
  )
}

export default Breadcrumb;