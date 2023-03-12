import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import './Header.css';
import logo from '../../assets/images/Burger-logo.png';


let Header = () => {
    return (
        <div className="Navigation">
            <Navbar className="Navbar">
                <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">
                    <img src={logo} alt="logo" width="75px" />
                </NavbarBrand>
                <Nav className="mr-md-5">
                    <NavItem>
                        <NavLink href="#" className="NavLink">SomeThing</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Header;