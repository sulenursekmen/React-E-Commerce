import React from 'react'
import Head from './Head'
import Search from './Search'
import Navbar from './Navbar'
import './Header.css'
const Header = ({cartItem}) => {
  return (
    <div>
      <Head/>
      <Search cartItem={cartItem} />
      <Navbar/>
    </div>
  )
}

export default Header
