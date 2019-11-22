import React from "react";
// reactstrap components
import {
  UncontrolledDropdown, 
  DropdownToggle,  
  DropdownMenu, 
  DropdownItem,
  Container,
  Row,
  Col,
  Input
} from "reactstrap";

class Observacion extends React.Component{
	constructor(args){
        super(args);
        this.state = {}
    }


    render(){
    	return(
    		<div> 
    		<Container>
    			<Row>
    			 <Col  xs="auto">Observacion</Col>
    			</Row>
    			<Row>
    			<Col  xs="auto">Provincia</Col>
        		<Col  xs="3">Canton</Col>
        		<Col  xs="2">Parroquia</Col>
    			</Row>
    			<Row>
    			<Col  xs="auto">
    			<UncontrolledDropdown>
    			<DropdownToggle caret>Escoga Provincia</DropdownToggle>
    			<DropdownMenu>
    			<DropdownItem>Provincia1</DropdownItem>
    			</DropdownMenu>
    			</UncontrolledDropdown>
    			</Col>
        		<Col  xs="auto"><UncontrolledDropdown>
    			<DropdownToggle caret>Escoga Canton</DropdownToggle>
    			<DropdownMenu>
    			<DropdownItem>Canton1</DropdownItem>
    			</DropdownMenu>
    			</UncontrolledDropdown>
    			</Col>
        		<Col  xs="auto"><UncontrolledDropdown>
    			<DropdownToggle caret>Escoga Ciudad</DropdownToggle>
    			<DropdownMenu>
    			<DropdownItem>Ciudad1</DropdownItem>
    			</DropdownMenu>
    			</UncontrolledDropdown>
    			</Col>
    			</Row>
    			<Row>
    			<Col xs="auto">Estacion</Col>
    			</Row>
    			<Row>
    			<Col xs="auto">
    			<UncontrolledDropdown>
    			<DropdownToggle caret>Escoga una Estacion</DropdownToggle>
    			<DropdownMenu>
    			<DropdownItem>Estacion1</DropdownItem>
    			</DropdownMenu>
    			</UncontrolledDropdown>
    			</Col>
    			</Row>
    			<Row>
    			<Col xs="auto">Fase Lunar</Col>
        		<Col xs="3">Epoca</Col>
    			</Row>
    			<Row>
    			<Col xs="auto">
    			<UncontrolledDropdown>
    			<DropdownToggle caret>Escoga Fase Lunar</DropdownToggle>
    			<DropdownMenu>
    			<DropdownItem>Fase Lunar1</DropdownItem>
    			</DropdownMenu>
    			</UncontrolledDropdown>
    			</Col>
        		<Col xs="auto"><UncontrolledDropdown>
    			<DropdownToggle caret>Escoga epoca</DropdownToggle>
    			<DropdownMenu>
    			<DropdownItem>Canton1</DropdownItem>
    			</DropdownMenu>
    			</UncontrolledDropdown>
    			</Col>
    			</Row>
    			<Row>
    			<Col xs="auto">Fecha de Observacion</Col>
    			</Row>
    			<Row>
    			<Col xs="auto">
                <Input type="Fecha" name="fecha" id="Fecha" placeholder="Ingrese la fecha" />
    			</Col>
    			</Row>

    		</Container>
    		</div>
    		)
    }
}

export default Observacion;