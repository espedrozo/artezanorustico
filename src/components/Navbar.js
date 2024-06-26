import React, {useState} from "react";
import {FaBars, FaTimes} from 'react-icons/fa';
import logo from './images/logoartezano.png';
import './Navbar.css';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='#hero' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick = {handleClick}>
                    {click ? (<FaTimes size={30} style={{color: '#ffffff'}} />) 
                    : (<FaBars size={30} style={{color: '#ffffff'}} />)};
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='#hero' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>Sobre Nós</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#gallery' onClick={closeMenu}>Galeria</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials' onClick={closeMenu}>Depoimentos</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo' onClick={closeMenu}>Contato</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;