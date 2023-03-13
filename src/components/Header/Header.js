import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import './Header.css';
import logo from '../../assets/images/Burger-logo.png';
import { NavLink } from "react-router-dom";


let Header = () => {
    return (
        <div className="Navigation">
            <Navbar className="Navbar">
                <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">
                    <img src={logo} alt="logo" width="75px" />
                </NavbarBrand>
                <Nav className="mr-md-5">
                    <NavItem>
                        <NavLink exact to="/" className="NavLink">BurgerBuilder</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/orders" className="NavLink">Orders</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Header;