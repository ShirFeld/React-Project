import React, { Component } from 'react'
import { Outlet, NavLink } from "react-router-dom";
import { Navbar as BotNav, Nav } from "react-bootstrap";

export default class Navbar extends Component {
    render() {
        return (
            <>
                <BotNav style={{ height: 70 }} bg="dark" variant="dark">
                    <Nav style={{ fontSize: 20 }} className="me-auto">
                        <Nav.Link to="/" as={NavLink}> Home</Nav.Link>
                        <Nav.Link to="/animals" as={NavLink}> Animals </Nav.Link>
                        <Nav.Link to="/addAnimal" as={NavLink}> Add Animal </Nav.Link>
                    </Nav>
                </BotNav>
                <Outlet />
            </>
        );
    }
}
