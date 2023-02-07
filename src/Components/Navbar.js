import React from 'react'

export default function Navbar() {
    return (
        <>
        <nav className="navBar">
            <div className="logoContainer">
                <img src="logo.png" alt="logo" srcSet=""/>
                <div>TransUP</div>
            </div>
            <div className="search">
                <input type="text" placeholder='Enter Laanguage' />
                <button className='btn'>Search</button>
            </div>
        </nav>
        </>
    )
}
