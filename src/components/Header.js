import React from 'react';
//import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
//import Headroom from "headroom.js";
// reactstrap components


class Header extends React.Component{
    constructor(args){
        super(args);
        this.state = {}
    }

    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="w">Centro internacional del pacifico para la reduccion de riesgos y desastres</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarColor01">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/inicio">Inicio <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/datos">Datos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contactanos">Contactanos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/nosotros">Quienes somos?</a>
                        </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0" _lpchecked="1">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search"/>
                        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;