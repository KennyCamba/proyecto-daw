import React from "react";
import logo from '../../assets/img/barco6x6.svg'
import '../../assets/css/login.css';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import HttpsOutlinedIcon from '@material-ui/icons/HttpsOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
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


class Register extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <br/>
        <main ref="main">
          <section className="section section-shaped section-lg">
            <Container className="pt-lg-md">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-1">
                      <div className="text-muted text-center mb-1">
                        <h3 className="colorTitle">Registro</h3>
                        <img id="logologin" src={logo} alt="logo"/>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-4 py-lg-5">
                      <Form role="form">
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText className="loginCuadro">
                                <AccountBoxOutlinedIcon/>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Nombre" type="text" className="loginCuadro"/>
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText className="loginCuadro">
                                <AccountBoxOutlinedIcon/>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Apellido" type="text" className="loginCuadro"/>
                          </InputGroup>
                        </FormGroup>
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
                                password strength:{" "}
                                <span className="text-success font-weight-700">
                                  strong
                                </span>
                              </small>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText className="loginCuadro">
                                        <HttpsOutlinedIcon/>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder="Confirmar contraseña" type="password" autoComplete="off"className="loginCuadro" />
                            </InputGroup>
                        </FormGroup>
                        
                        <Row className="my-4">
                          <Col xs="12">
                            <div className="custom-control custom-control-alternative custom-checkbox">
                              <input
                                className="custom-control-input"
                                id="customCheckRegister"
                                type="checkbox"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheckRegister"
                              >
                                <span>
                                  Estoy de acuerdo con las{" "}
                                  <a href="#pablo" onClick={e => e.preventDefault()}>
                                    Politicas de privacidad.
                                  </a>
                                </span>
                              </label>
                            </div>
                          </Col>
                        </Row>
                        <div className="text-center">
                          <Button className="mt-2" type="button">
                            Crear cuenta
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                      <Col className="text-right" xs="12">
                          <NavLink tag={Link} to="/login/" className="text-dark"><small>Iniciar sesión</small></NavLink>
                      </Col>
                  </Row>
                </Col>
              </Row>
              <br/>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default Register;