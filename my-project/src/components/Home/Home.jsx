import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div  style={{ padding: '10px' }}>
            <NavLink style={{ marginRight: '10px' }} to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
        </div>
    );
};

export default Home;