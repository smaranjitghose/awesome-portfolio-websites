import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar flex">
                <div className="navbar-brand">
                    <Link to='/' className='link'>John Doe</Link>
                </div>
                <ul className='nav-items flex'>
                    <li className="nav-item"> 
                        <Link exact className='nav-link link' to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link exact className='nav-link link' to='/experience'>Experience</Link>
                    </li>
                    <li className="nav-item">
                        <Link exact className='nav-link link' to='/projects'>Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link exact className='nav-link link' to='/education'>Education</Link>
                    </li>
                    <li className="nav-item">
                        <Link exact className='nav-link link' to='/research'>Research</Link>
                    </li>
                    <li className="nav-item">
                        <Link exact className='nav-link link' to='/resume'>Resume</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
