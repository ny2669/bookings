import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar'>
        <container className='navContainer'>
            <span className='logo'>Lamabooking</span>
            <div className='navItems'>
                <button className='register btnNav'>Register</button>
                <button className='login btnNav'>Login</button>
            </div>
        </container>
    </div>
  )
}

export default NavBar