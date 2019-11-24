import React from 'react';
import { Link } from "react-router-dom";
//import SearchIcon from '@material-ui/icons/Search';
//import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import logo from '../../assets/img/logos/barco6x6.svg';

// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";

import {
    //Button,
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
    //Input,
    //Media,
    //Row,
    //Col,
    //UncontrolledTooltip,
  } from "reactstrap";


class Header extends React.Component{
    constructor(args){
        super(args);
        this.state = {}
    }

    componentDidMount() {
        let headroom = new Headroom(document.getElementById("navbar-main"));
        // initialise
        headroom.init();
      }
      render() {
        return (
          <>
            <header className="header-global navbar-horizontal navbar-dark bg-dark ">
              <Navbar className="navbar-main navbar-transparent navbar-light headroom" expand="lg" id="navbar-main" >
                <Container>
                  <NavbarBrand className="mr-lg-5" id="contenedorlogoHeader" to="/" tag={Link}>
                    <img alt="logo" src={logo} id="logoHeader" />
                  </NavbarBrand>
                  
                  <button className="navbar-toggler" id="navbar_global">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <UncontrolledCollapse navbar toggler="#navbar_global">
                    <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                        {/* Opciones del encabezado */}
                            <NavItem>
                                <NavLink tag={Link} to="/">
                                    <i className="fa fa-home d-lg-none mr-1" />
                                    <span className="nav-link-inner--text">Inicio</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/datos/">
                                    <i className="fa fa-line-chart d-lg-none mr-1" />
                                    <span className="nav-link-inner--text">Datos</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/observacion/">
                                    <i className="fa fa-sticky-note d-lg-none mr-1" />
                                    <span className="nav-link-inner--text">Observación</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/contactanos/">
                                    <i className="fa fa-address-card d-lg-none mr-1" />
                                    <span className="nav-link-inner--text">Contáctanos</span>
                                </NavLink>
                            </NavItem>
                        <UncontrolledDropdown nav>
                            <DropdownToggle nav caret>
                                <i className="ni ni-circle-08" />
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem to="/profile/" tag={Link}>
                                    Perfil
                                </DropdownItem>
                                <DropdownItem to="/login/" tag={Link}>
                                    Iniciar sesión
                                </DropdownItem>
                                <DropdownItem to="/register/" tag={Link}>
                                    Registrarse
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem to="/salir/" tag={Link}>
                                    Cerrar sesión
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </UncontrolledCollapse>
                </Container>
              </Navbar>
            </header>
          </>
        );
    }

    /*
    render(){
        return(
            <header className="header-global">
                <Navbar className="navbar-main navbar-transparent navbar-dark bg-dark headroom" expand="lg" id="navbar-main">
                    <Container>
                        <NavbarBrand className="mr-lg-5" tag={Link} to="/" >
                            <h5 className="text-left text-light">Centro Internacional del pacífico <br/>para la reducción de riesgos y desastres</h5>
                        </NavbarBrand>
                        <button className="navbar-toggler" id="navbar_global">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <UncontrolledCollapse navbar toggler="#navbar_global">
                            <Nav className="container d-flex justify-content-end" navbar>
                                <NavItem>
                                    <NavLink tag={Link} to="/">Inicio</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/datos/">Datos</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/observacion/">Observación</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/contactanos/">Contáctanos</NavLink>
                                </NavItem>
                                
                                
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        <AccountCircleIcon/>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <NavLink tag={Link} to="/login/" className="text-dark">Iniciar sesión</NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink tag={Link} to="/profile/" className="text-dark">Perfil</NavLink>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <NavLink tag={Link} to="/registrarse/" className="text-dark">Registrarse</NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>  
                            </Nav>
                        </UncontrolledCollapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
    */
    /*
    col-sm-12 col-md-5 col-lg-5 card 
    <Nav className="align-items-lg-center ml-lg-auto container" navbar>
        <NavItem className="row">
            <Input className="col-sm-9 col-md-4 col-lg-8 "></Input>
            <Button className="col-sm-9 col-md-1 col-lg-3 align-items-lg-center offset-1"><SearchIcon/></Button>
        </NavItem>
    </Nav>
    */
}

export default Header;