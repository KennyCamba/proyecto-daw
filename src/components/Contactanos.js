import React from 'react'
import '../assets/css/contactanos.css'
import logo from '../assets/img/logos/barco6x6.svg'
import classnames from 'classnames'

import {
  Input,
  InputGroupText,
  InputGroupAddon,
  InputGroup,
  FormGroup,
  Button,
  CardBody,
  Card,
  Col,
  Row,
  Container,
  //DropdownToggle,
  //DropdownMenu, 
  //DropdownItem,
} from "reactstrap";

class Contactanos extends React.Component {
    constructor(args){
        super(args);
        this.state = {}
    }

    render(){
        return(
          <div className="App">
            <h3 className="colorTitle pt-4">Contáctanos</h3>
            <hr/>
            <div className="container row">
              <Container>
                <Row>
                  <Col lg="6">
                    <Card className="bg-gradient-secondary shadow">
                      <CardBody className="p-lg-5">
                        <FormGroup className={classnames("col-12", { focused: this.state.nameFocused })}>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-user-run" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Nombre" type="text" onFocus={e => this.setState({ nameFocused: true })} onBlur={e => this.setState({ nameFocused: false })} />
                          </InputGroup>
                        </FormGroup>

                        <FormGroup className={classnames("col-12", { focused: this.state.lastnameFocused })}>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-user-run" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Apellido" type="text" onFocus={e => this.setState({ lastnameFocused: true })} onBlur={e => this.setState({ lastnameFocused: false })} />
                          </InputGroup>
                        </FormGroup>

                        <FormGroup className={classnames("col-12", {focused: this.state.emailFocused})}>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Correo" type="email" onFocus={e => this.setState({ emailFocused: true })} onBlur={e => this.setState({ emailFocused: false })}/>
                          </InputGroup>
                        </FormGroup>

                        <FormGroup className={classnames( "col-12", {focused: this.state.placeFocused})}>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-map-big" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Lugar de origen" type="text" onFocus={e => this.setState({ placeFocused: true })} onBlur={e => this.setState({ placeFocused: false })}/>
                          </InputGroup>
                        </FormGroup>

                        <FormGroup className="mb-4, col-12">
                          <Input className="form-control-alternative" cols="80" name="name" placeholder="Detalle..." rows="4" type="textarea" />
                        </FormGroup>
                        
                        <div className="col-12">
                          <Button block size="lg" type="button" >
                            Enviar
                          </Button>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  
                  <Col lg="6">
                    <Card className="bg-gradient-secondary shadow">
                      <CardBody className="p-lg-5">
                        <img id="logologin" src={logo} alt="logo"/>
                        <p className="text-justify">Gracias por preferirnos estaremos gustosos de atender sus dudas y sugerencias.</p>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
            <br/>
          </div>
        );
    }
}

export default Contactanos;