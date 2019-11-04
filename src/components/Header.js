import React from 'react';
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
//import Headroom from "headroom.js";
// reactstrap components

import {
    Button,
    UncontrolledCollapse,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
    Input
  } from "reactstrap";


class Header extends React.Component{
    constructor(args){
        super(args);
        this.state = {}
    }

    render(){
        return(
            <div>
                <header className="header-global">
                    <Navbar
                        className="navbar-main navbar-transparent navbar-dark bg-dark headroom"
                        expand="lg"
                        id="navbar-main"
                    >
                        <Container>
                            <NavbarBrand className="mr-lg-5" to="/" >
                                <h5 className="text-left text-light">Centro Internacional del pacífico <br/>para la reducción de riesgos y desastres</h5>
                            </NavbarBrand>
                            <button className="navbar-toggler" id="navbar_global">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <UncontrolledCollapse navbar toggler="#navbar_global">
                                <div className="navbar-collapse-header">
                                    <Row>
                                        <Col className="collapse-brand" xs="6">
                                        <a href="/">
                                            <img
                                            alt=".===."
                                            src="..."
                                            />
                                        </a>
                                        </Col>
                                        <Col className="collapse-close" xs="6">
                                        <button className="navbar-toggler" id="navbar_global">
                                            <span />
                                            <span />
                                        </button>
                                        </Col>
                                    </Row>
                                </div>
                                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                                    <NavItem>
                                        <NavLink tag={Link} to="/">Inicio</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} to="/datos/">Datos</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} to="/contactanos/">Contactanos</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} to="/nosotros/">Quienes somos?</NavLink>
                                    </NavItem>
                                    <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Perfil
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                        Iniciar Sesión
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                        Salir
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                </Nav>
                                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                                    <NavItem>
                                        <NavLink
                                        className="nav-link-icon"
                                        href="https://www.facebook.com/creativetim"
                                        id="tooltip333589074"
                                        target="_blank"
                                        >
                                        <i className="fa fa-facebook-square" />
                                        <span className="nav-link-inner--text d-lg-none ml-2">
                                            Facebook
                                        </span>
                                        </NavLink>
                                        <UncontrolledTooltip delay={0} target="tooltip333589074">
                                        Like us on Facebook
                                        </UncontrolledTooltip>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                        className="nav-link-icon"
                                        href="https://www.instagram.com/creativetimofficial"
                                        id="tooltip356693867"
                                        target="_blank"
                                        >
                                        <i className="fa fa-instagram" />
                                        <span className="nav-link-inner--text d-lg-none ml-2">
                                            Instagram
                                        </span>
                                        </NavLink>
                                        <UncontrolledTooltip delay={0} target="tooltip356693867">
                                        Follow us on Instagram
                                        </UncontrolledTooltip>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                        className="nav-link-icon"
                                        href="https://twitter.com/creativetim"
                                        id="tooltip184698705"
                                        target="_blank"
                                        >
                                        <i className="fa fa-twitter-square" />
                                        <span className="nav-link-inner--text d-lg-none ml-2">
                                            Twitter
                                        </span>
                                        </NavLink>
                                        <UncontrolledTooltip delay={0} target="tooltip184698705">
                                        Follow us on Twitter
                                        </UncontrolledTooltip>
                                    </NavItem>
                                    <NavItem>
                                        <Input></Input>
                                        <Button>Buscar</Button>
                                    </NavItem>
                                </Nav>
                            </UncontrolledCollapse>
                        </Container>
                    </Navbar>
                </header>
            </div>
        );
    }
}

export default Header;