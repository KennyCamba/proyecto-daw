import React from "react";
import logo from '../../assets/img/logos/barco6x6.svg'
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import HttpsOutlinedIcon from '@material-ui/icons/HttpsOutlined';
import '../../assets/css/login.css';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    NavLink,
  } from "reactstrap";
  
import { Link } from "react-router-dom";
class Estacion extends React.Component {

    render(){
        return (
        <main ref="main">
        <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
            </div>
            <p className="text-center">aqui va el form</p>
            </section>
        </main>);
    }


}

export default Estacion
