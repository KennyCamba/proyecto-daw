import React from "react";
import logo from '../../assets/img/logos/barco6x6.svg'
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import HttpsOutlinedIcon from '@material-ui/icons/HttpsOutlined';
import '../../assets/css/login.css';
import { Link } from "react-router-dom";

// reactstrap components
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


class Login extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
        <Container>
            <main ref="main">
                <section className="section-shaped">
                    <Container className="pt-lg-md">
                        <Row className="justify-content-center">
                            <Col lg="5">
                                <Card className="bg-secondary shadow border-0">
                                    <CardHeader className="bg-white pb-1">
                                        <div className="text-muted text-center mb-3">
                                            <h3 className="colorTitle">Inicio de sesión</h3>
                                            <img id="logologin" src={logo} alt="logo"/>
                                        </div>  
                                    </CardHeader>
                                    <CardBody className="px-lg-4 py-lg-5">
                                        <Form role="form">
                                            <FormGroup className="mb-3">
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText className="loginCuadro">
                                                            <MailOutlinedIcon/>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input placeholder="Correo" type="email" className="loginCuadro" />
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText className="loginCuadro">
                                                            <HttpsOutlinedIcon/>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input placeholder="Contraseña" type="password" autoComplete="off"className="loginCuadro" />
                                                </InputGroup>
                                                <div className="font-italic text-left">
                                                    <small>
                                                        <span className="text-failed font-weight-700">
                                                        Contraseña incorrecta
                                                        </span>
                                                    </small>
                                                </div>
                                            </FormGroup>
                                            <div className="custom-control custom-control-alternative custom-checkbox text-left">
                                                <input className="custom-control-input" id="customCheckLogin" type="checkbox"/>
                                                <label className="custom-control-label" htmlFor="customCheckLogin">
                                                    <span>Recuerdame</span>
                                                </label>
                                            </div>
                                            <div className="text-center">
                                                <Button
                                                    className="mt-3"
                                                    type="button"
                                                >
                                                    Iniciar
                                                </Button>
                                            </div>         
                                        </Form>
                                    </CardBody>
                                </Card>
                                <Row className="mt-3">
                                    <Col className="text-left" xs="6">
                                        <NavLink tag={Link} to="/recuperarcontrasena/" className="text-dark"><small>Olvidó su contraseña?</small></NavLink>
                                    </Col>
                                    <Col className="text-right" xs="6">
                                        <NavLink tag={Link} to="/register/" className="text-dark"><small>Crear nueva cuenta</small></NavLink>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <br/>
                    </Container>
                </section>
            </main>
        </Container>
    );
  }
}

export default Login;
