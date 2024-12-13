import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isLoggedIn, username, onLogout }) {
    return (
        <nav style={{ padding: '10px', background: '#007BFF', color: 'white' }}>
            <Link to="/" style={{ marginRight: '15px', color: 'white', textDecoration: 'none' }}>Home</Link>
            {isLoggedIn ? (
                <>
                    <span style={{ marginRight: '15px' }}>Welcome, {username}</span>
                    <button onClick={onLogout} style={{ color: 'white', background: 'red', border: 'none', padding: '5px 10px' }}>Logout</button>
                </>
            ) : (
                <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
            )}
        </nav>
    );
}

export default Navbar;
