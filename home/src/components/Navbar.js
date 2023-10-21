import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
    return (
        <header>
            <nav>
                <img src='home/public/images/logo.png' alt='logo' className='logo' />
                <ul>
                    <li>
                        <a href='/login'>Login</a>
                    </li>
                    <li>
                        <a href='/register'>Sign Up</a>
                    </li>
                    <li className='search'>
                        <a href='/search'>
                            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                        </a>
                    </li>
                    <li className='menu'>
                        <a>
                            <div className='bar'></div>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar