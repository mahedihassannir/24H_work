import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='h-20 bg-gray-800 text-white px-20 flex justify-between items-center '>
                <h1 className='text-2xl'> <span className='text-orange-700'>Digita</span>lwork</h1>
                <ul className='flex gap-5'>
                    <Link to="/" >Home</Link>
                    <Link to="/About" >About</Link>
                    <Link to="/Contact" >Contact us</Link>
                    <Link to="/Login" >Login</Link>
                    <Link to="/Register" >Register</Link>
                </ul>
            </nav>

        </div>
    );
};

export default Header;