import React from 'react'
import logo from '../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <header>
            <nav>
                <img src={logo} alt='logo' className='logo' />
                <ul>
                    <li>
                        <a href='/login'>Login</a>
                    </li>
                    <li>
                        <a href='/register'>Sign Up</a>
                    </li>
                    <li className='search'>
                        <a href='/search'>
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </a>
                    </li>
                    <li className='menu'>
                        <a href='/'>
                            <div className='bar'></div>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar