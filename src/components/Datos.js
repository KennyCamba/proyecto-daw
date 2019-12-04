import React from 'react';
import classnames from 'classnames'
import jsondata from './../assets/resource/observaciones.json'
import CanvasJSReact from './../assets/vendor/canvasjs.react';
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
// reactstrap components
import {
    FormGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Input,
    Col,
    Row,
    Card,
    CardBody,
    Container,
    //Button,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Table,
  } from "reactstrap";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Datos extends React.Component{
    constructor(args){
        super(args);
        this.state = {
            tabs: 1,
            observaciones : {},
        }
    }

    toggleNavs = (e, state, index) => {
        e.preventDefault();
        this.setState({
            [state]: index
        });
    };

    componentDidMount(){
        //fetch(jsondata)
        //.then(res => res.json())
        //.then(res => {
                let id = 0
                for(let key in jsondata){
                    console.log(jsondata[key])
                    
                    let estacion = jsondata[key].estacion.nombre
                    let fecha = jsondata[key].fecha
                    let observador = jsondata[key].observador
                    let faseLunar = jsondata[key].fase_lunar
                    let mediciones = jsondata[key].mediciones.length
                    let revisison = 'true'
                    let epoca = 'verano'

                    this.setState({ observaciones: this.state.observaciones[id] = {fecha, observador, faseLunar, epoca, estacion, mediciones, revisison} })
                    id+=1;
                }
                console.log(this.state.observaciones)
                
        //    })
        //.catch(() => this.setState({ hasErrors: true }));
    }

    render(){
        var observaciones = this.state.observaciones
        const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", //"light1", "dark1", "dark2"
			title:{
				text: "Simple Column Chart with Index Labels"
			},
			data: [{
				type: "column", //change type to bar, line, area, pie, etc
				//indexLabel: "{y}", //Shows y value on all Data Points
				indexLabelFontColor: "#5A5757",
				indexLabelPlacement: "outside",
				dataPoints: [
					{ x: 10, y: 71 },
					{ x: 20, y: 55 },
					{ x: 30, y: 50 },
					{ x: 40, y: 65 },
					{ x: 50, y: 71 },
					{ x: 60, y: 68 },
					{ x: 70, y: 38 },
					{ x: 80, y: 92, indexLabel: "Highest" },
					{ x: 90, y: 54 },
					{ x: 100, y: 60 },
					{ x: 110, y: 21 },
					{ x: 120, y: 49 },
					{ x: 130, y: 36 }
				]
			}]
		}
        const options2 = {
            title: {
              text: "Basic Column Chart in React"
            },
            data: [{				
                      type: "column",
                      dataPoints: [
                          { label: "Apple",  y: 10  },
                          { label: "Orange", y: 15  },
                          { label: "Banana", y: 25  },
                          { label: "Mango",  y: 30  },
                          { label: "Grape",  y: 28  }
                      ]
             }]
         }

        return(
            <main ref="main">
                <section className="section section-lg bg-gradient-default">
                    <Container>
                        <Card className="bg-gradient-secondary shadow">
                            <CardBody className="p-lg-4">
                                <h3><strong>Datos</strong></h3>

                                <div>
                                    <div class="mx-auto row">
                                        <div className="col-xs-12 col-md-12 col-lg-12 pb-3">
                                            <strong>Por fecha:</strong>
                                            <Row>
                                                <Col xs={6}>
                                                    <FormGroup>
                                                        <InputGroup className={classnames( "input-group-alternative", {focused: this.state.fechaInicioFocused})}>
                                                            <InputGroupAddon addonType="prepend">
                                                                {/* Imagen calendario */}
                                                                <InputGroupText>
                                                                    <i className="ni ni-calendar-grid-58" />
                                                                </InputGroupText>
                                                            </InputGroupAddon>

                                                            <ReactDatetime
                                                                inputProps={{ placeholder: "Date Picker Here" }}
                                                                timeFormat={false}
                                                                renderDay={(props, currentDate, selectedDate) => {
                                                                    let classes = props.className;
                                                                    if( this.state.startDate && this.state.endDate && this.state.startDate._d + "" === currentDate._d + "" ) {
                                                                        classes += " start-date";
                                                                    }else if( this.state.startDate && this.state.endDate && new Date(this.state.startDate._d + "") < new Date(currentDate._d + "") && new Date(this.state.endDate._d + "") > new Date(currentDate._d + "") ) {
                                                                        classes += " middle-date";
                                                                    } else if ( this.state.endDate && this.state.endDate._d + "" === currentDate._d + "" ) {
                                                                        classes += " end-date";
                                                                    }
                                                                    return (
                                                                        <td {...props} className={classes}>
                                                                            {currentDate.date()}
                                                                        </td>
                                                                    );
                                                                }}
                                                                onChange={e => this.setState({ startDate: e })}
                                                                onFocus={e => this.setState({ fechaInicioFocused: true })} 
                                                                onBlur={e => this.setState({ fechaInicioFocused: false })}
                                                            />
                                                        </InputGroup>
                                                    </FormGroup>
                                                </Col>
                                                <Col xs={6}>
                                                    <FormGroup>
                                                        <InputGroup className={classnames( "input-group-alternative", {focused: this.state.fechaFinFocused})}>
                                                            <InputGroupAddon addonType="prepend">
                                                                {/* Imagen calendario */}
                                                                <InputGroupText>
                                                                    <i className="ni ni-calendar-grid-58" />
                                                                </InputGroupText>
                                                            </InputGroupAddon>
                                                            
                                                            <ReactDatetime
                                                            inputProps={{ placeholder: "Date Picker Here" }}
                                                            timeFormat={false}
                                                            renderDay={(props, currentDate, selectedDate) => {
                                                                let classes = props.className;
                                                                if (
                                                                this.state.startDate &&
                                                                this.state.endDate &&
                                                                this.state.startDate._d + "" === currentDate._d + ""
                                                                ) {
                                                                classes += " start-date";
                                                                } else if (
                                                                this.state.startDate &&
                                                                this.state.endDate &&
                                                                new Date(this.state.startDate._d + "") <
                                                                    new Date(currentDate._d + "") &&
                                                                new Date(this.state.endDate._d + "") >
                                                                    new Date(currentDate._d + "")
                                                                ) {
                                                                classes += " middle-date";
                                                                } else if (
                                                                this.state.endDate &&
                                                                this.state.endDate._d + "" === currentDate._d + ""
                                                                ) {
                                                                classes += " end-date";
                                                                }
                                                                return (
                                                                <td {...props} className={classes}>
                                                                    {currentDate.date()}
                                                                </td>
                                                                );
                                                            }}
                                                            onChange={e => this.setState({ endDate: e })}
                                                            onFocus={e => this.setState({ fechaFinFocused: true })} 
                                                            onBlur={e => this.setState({ fechaFinFocused: false })}
                                                            />
                                                        </InputGroup>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className="col-xs-12 col-md-12 col-lg-12  pb-3" id="stationForm" data-cantons-url="{% url 'ajax_load_cantons' %}" data-url="{% url 'table_data' %}"
                                        data-parishes-url="{% url 'ajax_load_parishes' %}" data-stations-url="{% url 'ajax_load_stations' %}">
                                            <strong>Por ubicación:</strong>
                                            <div class="row">
                                                <FormGroup className={classnames( "col-xs-6 col-sm-4 col-md-4 col-lg-3", {focused: this.state.provFocused})}>
                                                    <InputGroup className="input-group-alternative">
                                                        {/* 
                                                            <Input placeholder="Lugar de origen" type="text" 
                                                            onFocus={e => this.setState({ placeFocused: true })} 
                                                            onBlur={e => this.setState({ placeFocused: false })} 
                                                            valid/> 
                                                        */}
                                                        
                                                        <Input placeholder="Provincia" type="select" name="select" onFocus={e => this.setState({ provFocused: true })} onBlur={e => this.setState({ provFocused: false })}>
                                                            <option value="">Provincia</option>
                                                            <option>Esmeraldas</option>
                                                            <option>El Oro</option>
                                                            <option>Guayas</option>
                                                            <option>Manabí</option>
                                                            <option>Santa Elena</option>
                                                        </Input>

                                                    </InputGroup>
                                                </FormGroup>
                                                
                                                <FormGroup className={classnames( "col-xs-6 col-sm-4 col-md-4 col-lg-3", {focused: this.state.cantonFocused})}>
                                                    <InputGroup className="input-group-alternative">
                                                        <Input placeholder="Lugar de origen" type="select" name="select" onFocus={e => this.setState({ cantonFocused: true })} onBlur={e => this.setState({ cantonFocused: false })}>
                                                            <option value="">Canton</option>
                                                            <option>Guayaquil</option>
                                                            <option>Durán</option>
                                                            <option>Milagro</option>
                                                            <option>Santa Elena</option>
                                                        </Input>
                                                    </InputGroup>
                                                </FormGroup>

                                                <FormGroup className={classnames( "col-xs-6 col-sm-4 col-md-4 col-lg-3", {focused: this.state.parroquiaFocused})}>
                                                    <InputGroup className="input-group-alternative">
                                                        <Input placeholder="Lugar de origen" type="select" name="select" onFocus={e => this.setState({ parroquiaFocused: true })} onBlur={e => this.setState({ parroquiaFocused: false })}>
                                                            <option value="">Parroquia</option>
                                                            <option>Guayaquil</option>
                                                            <option>Durán</option>
                                                            <option>Milagro</option>
                                                            <option>Santa Elena</option>
                                                        </Input>
                                                    </InputGroup>
                                                </FormGroup>

                                                <FormGroup className={classnames( "col-xs-6 col-sm-4 col-md-4 col-lg-3", {focused: this.state.stationFocused})}>
                                                    <InputGroup className="input-group-alternative">
                                                        <Input placeholder="Lugar de origen" type="select" name="select" onFocus={e => this.setState({ stationFocused: true })} onBlur={e => this.setState({ stationFocused: false })}>
                                                            <option value="">Estación</option>
                                                            <option>Guayaquil</option>
                                                            <option>Durán</option>
                                                            <option>Milagro</option>
                                                            <option>Santa Elena</option>
                                                        </Input>
                                                    </InputGroup>
                                                </FormGroup>
                                            </div>
                                        </div>
                                        
                                        <div className="col-xs-12 col-md-12 col-lg-12">
                                                <a class="btn btn-secondary" id="filtrar" href="/">Filtrar</a>
                                        </div>
                                    </div>
                                    <hr/>

                                    <div className="nav-wrapper">
                                        <Nav className="nav-fill flex-column flex-md-row" id="tabs-icons-text" pills role="tablist" >
                                            <NavItem>
                                                <NavLink aria-selected={this.state.tabs === 1}
                                                    className={
                                                        classnames("mb-sm-3 mb-md-0", {active: this.state.tabs === 1})
                                                    }
                                                    onClick={e => this.toggleNavs(e, "tabs", 1)}
                                                    role="tab"
                                                >
                                                    <i class="fa fa-table mr-2" aria-hidden="true"></i>
                                                    Tabla
                                                </NavLink>
                                            </NavItem>
                                            
                                            <NavItem>
                                                <NavLink aria-selected={this.state.tabs === 2}
                                                    className={
                                                        classnames("mb-sm-3 mb-md-0", { active: this.state.tabs === 2 })}
                                                    onClick={e => this.toggleNavs(e, "tabs", 2)}
                                                    role="tab"
                                                >
                                                    <i class="fa fa-bar-chart mr-2" aria-hidden="true"></i>
                                                    Gráficas
                                                </NavLink>
                                            </NavItem>
                                            
                                            <NavItem>
                                                <NavLink
                                                    aria-selected={this.state.tabs === 3}
                                                    className={
                                                        classnames("mb-sm-3 mb-md-0", {active: this.state.tabs === 3 })}
                                                    onClick={e => this.toggleNavs(e, "tabs", 3)}
                                                    role="tab"
                                                >
                                                    <i class="fa fa-download mr-2" aria-hidden="true"></i>
                                                    Descargar
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </div>

                                </div>
                            </CardBody>
                        </Card>
                    </Container>
                    

                    {/* SVG separator */}
                    <div className="separator separator-bottom separator-skew zindex-100">
                        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0" >
                            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
                        </svg>
                    </div>    
                </section>

                <section className="section section-lg pt-lg-0 mt--0">
                    <div className="container">
                        <Card className="shadow">
                            <CardBody>
                                <TabContent activeTab={"tabs" + this.state.tabs}>
                                    <TabPane tabId="tabs1">
                                        <div id="cuadroFiltrado">
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">Buscar:</div>
                                                </div>
                                                <input id="buscar" type="text" class="form-control"/>
                                            </div>
                                        
                                            <div class="table-responsive">
                                                <Table hover size="sm">
                                                    <thead className="thead-dark">
                                                        <tr>
                                                        <th scope="col">Fecha</th>
                                                        <th scope="col">Observador</th>
                                                        <th scope="col">Fase Lunar</th>
                                                        <th scope="col">Época</th>
                                                        <th scope="col">Estación</th>
                                                        <th scope="col" class="text-center">Cant. mediciones</th>
                                                        <th scope="col" class="text-right">Revisión</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody id="tabla">
                                                        { Object.keys(observaciones).map(k =>
                                                            (
                                                                <tr key={"row" + k}>
                                                                    <th scope="row">{k}</th>
                                                                    <td>{observaciones[k].observador}</td>
                                                                    <td>{observaciones[k].faseLunar}</td>
                                                                    <td>{observaciones[k].epoca}</td>
                                                                    <td>{observaciones[k].estacion}</td>
                                                                    <td>{observaciones[k].mediciones}</td>
                                                                    <td>{observaciones[k].revisison}</td>
                                                                </tr>
                                                            )
                                                        )}
                                                    </tbody>
                                                </Table>   
                                            </div>
                                            
                                            <p id="total"></p>
                                            <ul class="pagination justify-content-center ">
                                                    <li class="page-item"><a class="page-link" id="Panterior" href="/" onselectstart="return false">Anterior</a></li>
                                                    <li class="page-item"><a class="page-link" id="Psiguiente" href="/" onselectstart="return false">Siguiente</a></li>
                                            </ul>
                                        </div>   
                                    </TabPane>
                                    
                                    <TabPane tabId="tabs2">
                                    < div class="tab-pane fade" id="nav-graph" role="tabpanel" aria-labelledby="nav-graph-tab"
                                data-measurements-url="{% url 'ajax_load_measurements' %}"></ div>
                                            <div class="mx-auto row">
                                                <div class="col-xs-12 col-sm-8 col-md-7 col-lg-7">
                                                    <strong>Elija el tipo de variable a graficar:</strong>
                                                    <select class="form-control form-control-sm" id="graficos">
                                                        <option></option>
                                                        <option>Número de mediciones por observaciones</option>
                                                        <option>Número de observaciones por estaciones</option>
                                                        <option>Época(Estacion climática)</option>
                                                        <option>Fase Lunar</option>
                                                        <optgroup label="Corriente del litoral">
                                                            <option>Velocidad promedio por Observaciones</option>
                                                            <option>Tiempo promedio por Observaciones</option>
                                                            <option>Espacio promedio por Observaciones</option>
                                                            <option>Dirección corriente litoral</option>
                                                        </optgroup>
                                                        <option>Distancia línea de playa a la rompiente de la ola por Observaciones</option>
                                                        <option>Distancia línea de playa al flotador por Observaciones</option>
                                                        <option>Ancho de zona de surf</option>
                                                        <option>Corrientes de resaca</option>
                                                        <option>Orientación de la playa</option>
                                                        <optgroup label="viento">
                                                            <option>Velocidad del viento</option>
                                                            <option>Dirección del viento</option>
                                                        </optgroup>
                                                        <optgroup label="Olas rompientes">
                                                            <option>Valor promedio del periodo</option>
                                                            <option>Tipos de olas</option>
                                                            <option>Ángulo de aproximación</option>
                                                            <option>Ortogonal de las olas</option>
                                                            <option>Valor promedio de altura de la rompiente</option>
                                                        </optgroup>
                                                    </select>
                                                </div>

                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><br/></div>
                                                <div class="col-xs-10 col-sm-10 col-md-11 col-lg-11" id="chartContainer"></div>
                                            </div>
                                            <div>
                                            <CanvasJSChart options = {options}  /* onRef={ref => this.chart = ref} *//>
                                            </div>
                                    </TabPane>
                                    
                                    <TabPane tabId="tabs3">
                                        <div class="tab-pane fade" id="nav-export" role="tabpanel" aria-labelledby="nav-export-tab">
                                            <div class="row" >
                                                <div class="col">
                                                    <div class="row">
                                                        <div class="col-sm-3">
                                                            <label for="file">Exportar como:</label>
                                                            <select class="form-control form-control-sm" id="file">
                                                                <option value="csv">CSV</option>
                                                                <option value="pdf">PDF</option>
                                                            </select>
                                                            <p></p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="row" id='todo'>
                                                        <div class="col checkbox checkbox-primary">
                                                            <input type="checkbox" class="styled" id="all" checked/>
                                                            <label for="all" class="form-check-label">Todo</label>
                                                        </div>
                                                    </div>
                                                    <div id="check-group">
                                                        <div class="row">
                                                            <div class="col checkbox checkbox-primary">
                                                                <input type="checkbox" class="styled" id="resume" checked value="resume"/>
                                                                <label for="resume" class="form-check-label">Datos resumidos</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col">
                                                            <button class="btn btn-secondary" id="download">Exportar</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                            </Card>
                    </div>
                </section>
                            
            </main>
        );
    }
}

export default Datos;