import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <header>
            <nav>
                <h2 className='logo'>Hi Alex</h2>
                <ul>
                    <li>
                        <a href='/login'>Login</a>
                    </li>
                    <li>
                        <a href='/register'>Sign Up</a>
                    </li>
                    <li className='search'>
                        <a href='/search'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
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