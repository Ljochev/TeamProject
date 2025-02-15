import React from 'react';
import HeaderComp from '../components/Header/HeaderComp';
import FooterComp from '../components/Footer/FooterComp';

const Layout = ({header=false, footer=false, children}) => {
  return (
    <>
    {header && <HeaderComp />}
    {children}
    {footer && <FooterComp />}
    </>
  )
}

export default Layout