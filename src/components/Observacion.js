import React from "react";
// reactstrap components
import {
  UncontrolledDropdown, 
  DropdownToggle,  
  DropdownMenu, 
  DropdownItem,
  Container,
  Row,
  Col
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
    			 <Col>Observacion</Col>
    			</Row>
    			<Row>
    			<Col>Provincia</Col>
        		<Col>Canton</Col>
        		<Col>Parroquia</Col>
    			</Row>
    			<Row>
    			<Col>
    			<UncontrolledDropdown>
    			<DropdownToggle caret>Escoga Provincia</DropdownToggle>
    			<DropdownMenu>
    			<DropdownItem>Provincia1</DropdownItem>
    			</DropdownMenu>
    			</UncontrolledDropdown>
    			</Col>
        		<Col><UncontrolledDropdown>
    			<DropdownToggle caret>Escoga Canton</DropdownToggle>
    			<DropdownMenu>
    			<DropdownItem>Canton1</DropdownItem>
    			</DropdownMenu>
    			</UncontrolledDropdown>
    			</Col>
        		<Col><UncontrolledDropdown>
    			<DropdownToggle caret>Escoga Ciudad</DropdownToggle>
    			<DropdownMenu>
    			<DropdownItem>Ciudad1</DropdownItem>
    			</DropdownMenu>
    			</UncontrolledDropdown>
    			</Col>
    			</Row>
    			<Row>
    			<Col>Estacion</Col>
    			</Row>
    			<Row>
    			<Col>
    			<UncontrolledDropdown>
    			<DropdownToggle caret>Escoga una Estacion</DropdownToggle>
    			<DropdownMenu>
    			<DropdownItem>Estacion1</DropdownItem>
    			</DropdownMenu>
    			</UncontrolledDropdown>
    			</Col>
    			</Row>
    			<Row>
    			<Col>Fase Lunar</Col>
        		<Col>Epoca</Col>
    			</Row>
    			<Row>
    			<Col>
    			<UncontrolledDropdown>
    			<DropdownToggle caret>Escoga Fase Lunar</DropdownToggle>
    			<DropdownMenu>
    			<DropdownItem>Fase Lunar1</DropdownItem>
    			</DropdownMenu>
    			</UncontrolledDropdown>
    			</Col>
        		<Col><UncontrolledDropdown>
    			<DropdownToggle caret>Escoga epoca</DropdownToggle>
    			<DropdownMenu>
    			<DropdownItem>Canton1</DropdownItem>
    			</DropdownMenu>
    			</UncontrolledDropdown>
    			</Col>
    			</Row>
    			<Row>
    			<Col>Fecha de Observacion</Col>
    			</Row>
    			<Row>
    			<Col>
    			<UncontrolledDropdown>
    			<DropdownToggle caret>Fecha</DropdownToggle>
    			<DropdownMenu>
    			<DropdownItem>Estacion1</DropdownItem>
    			</DropdownMenu>
    			</UncontrolledDropdown>
    			</Col>
    			</Row>

    		</Container>
    		</div>
    		)
    }
}

export default Observacion;