import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

import _ from 'lodash';

const Header = ({ items }) => {
    const navItems = items.map((item, index) => {
        if (item.to != null) {
            return (
                <LinkContainer to={item.to} key={index}>
                    {
                        <NavItem onClick={item.onClick} >
                            {item.text}
                        </NavItem>
                    }
                </LinkContainer>
            );
        } else {
            return (
                <NavItem onClick={item.onClick} key={index}>
                    {item.text}
                </NavItem>
            );
        }
    });

    return (
        <div>
            <Navbar inverse collapseOnSelect id="navbar" className="nav-down">
                <Navbar.Header>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        {navItems}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;