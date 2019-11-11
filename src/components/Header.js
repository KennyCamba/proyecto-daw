import React from 'react';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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
                                <Nav className="navbar-nav-hover align-items-lg-center container" navbar>
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
                                        <AccountCircleIcon/>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <NavLink tag={Link} to="/login/" className="text-dark">Iniciar sesión</NavLink>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <NavLink tag={Link} to="/registrarse/" className="text-dark">Registrasre</NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                </Nav>
                                <Nav className="align-items-lg-center ml-lg-auto container" navbar>
                                    <NavItem className="row">
                                        <Input className="col-md-4 col-lg-8"></Input>
                                        <Button className="col-md-1 col-lg-3 align-items-lg-center"><SearchIcon/></Button>
                                    </NavItem>
                                </Nav>
                            </UncontrolledCollapse>
                        </Container>
                    </Navbar>
                </header>
            </div>
        );
    }
    //col-xs-12 col-md-5 col-lg-5 card 
}

export default Header;