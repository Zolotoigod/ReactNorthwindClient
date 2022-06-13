import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function NavMenu(){
    return(
        <Navbar bg='dark' expand='lg'>
            <Navbar.Brand className='p-3 text-white' href='/'><h2>NorthwindClient with ReactJS</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='justify-content-end flex-grow-1 pe-3'>
                    <NavLink className='p-2 bg-dark text-white' to='/'><h4>Home</h4></NavLink>
                    <NavLink className='p-2 bg-dark text-white' to='/products'><h4>Products</h4></NavLink>
                    <NavLink className='p-2 bg-dark text-white' to='/categories'><h4>Categories</h4></NavLink>
                    <NavLink className='p-2 bg-dark text-white' to='/blog'><h4>Blog</h4></NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavMenu