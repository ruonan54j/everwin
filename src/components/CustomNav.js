import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import React, { useState, useEffect } from 'react';

function CustomNav() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (window.location.href.includes('home')) {
            setActive(0)
        } else if (window.location.href.includes('about')) {
            setActive(1)
        } else if (window.location.href.includes('service')) {
            setActive(2)
        }
      }, [])


    return (
        <Navbar className='custom-nav' expand="md">
            <Navbar.Brand>
                <Nav.Link href="/">
                    <img src={logo} alt='logo' className='nav-logo' />
                </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto nav-links">
                    <Nav.Link className={active === 0 ? 'nav-tab nav-active' : 'nav-tab' } href='/'>
                        HOME
                    </Nav.Link>
                    <Nav.Link className={active === 1 ? 'nav-tab nav-active' : 'nav-tab' } href='/about'>
                        ABOUT
                    </Nav.Link> 

                    <NavDropdown title="SERVICES" className={active === 2 ? 'nav-tab nav-active' : 'nav-tab' } id="basic-nav-dropdown">
                        <NavDropdown.Item href="/service-shipping" onClick={() => setActive(2)}>Shipping</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/service-warehouse" onClick={() => setActive(2)}>Warehouse and Fullfillment</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/service-business" onClick={() => setActive(2)}>Business Solutions</NavDropdown.Item>
                    </NavDropdown>

                    <a href="/#how-it-works-landing" className='theme-btn nav-btn'>GET QUOTE</a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default CustomNav
