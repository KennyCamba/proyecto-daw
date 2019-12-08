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
FormText,
Input,
InputGroupAddon,
InputGroupText,
InputGroup,
Container,
Row,
Col,
NavLink,
Label,
} from "reactstrap";
import { Link } from "react-router-dom";
class Estacion extends React.Component {
render(){
return (
<main ref="main">
    <section className="section-shaped">
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
                                        <Form>
                                            <h3 className="text-center colorTitle">Registro de Estacion</h3>
                                            <FormGroup>
                                                <Label for="EjemploNombre">Nombre</Label>
                                                <Input type="nombre" name="nombre" id="EjemploNombre" placeholder="Escriba el nombre" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="EjemploLatitud">Latitud</Label>
                                                <Input type="latitud" name="latitud" id="EjemploLatitud" placeholder="Indique la latitud" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="EjemploLongitud">Longitud</Label>
                                                <Input type="logintud" name="logintud" id="EjemploLatitud" placeholder="Indique la longitud" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="EjemploProvincia">Provincia</Label>
                                                <Input type="pronvincia" name="provincia" id="EjemploProvincia" placeholder="Escoga la provincia" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="EjemploCanton">Canton</Label>
                                                <Input type="canton" name="canton" id="EjemploCanton" placeholder="Escoga el canton" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="EjemploParroquia">Parroquia</Label>
                                                <Input type="parroquia" name="parroquia" id="EjemploParroquia" placeholder="Escoga la parroquia" />
                                            </FormGroup>
                                        </Form>
                                    </section>
                                </main>);
                                }
                                }
                                export default Estacion