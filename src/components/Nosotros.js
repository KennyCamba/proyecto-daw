import React from 'react';
import {Card, CardBody} from 'reactstrap';
import imagen from '../assets/img/costas.jpg';
import imagen2 from '../assets/img/espol.png';

class Nosotros extends React.Component{
    constructor(args){
        super(args);
        this.state = {}
    }

    render(){
        return(
            <main ref="main">
            <section className="section section-shaped section-lg pb-150">
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

                <div className="container">
                    <h2 className="text-light ">Nosotros</h2>
                  
                    <section className="section section-lg pt-lg-0 mt--400">
                    <div className="container">
                            <Card className=" shadow border-0">{/*card-lift--hover esta clase para efecto de posicion de mouse*/}
                            <CardBody className="py-5">
                            <div class="container QueHacemos">
                                <div className="row header ">
                                    <div className="col-xs-12 text-center">
                                    <h2 className="primaryColor">Historia del centro</h2>
                                    </div>
                            </div>

                           <div className="row">
                                <div className="col-md-6 first-column text-justify">
                                <p>El centro funciona en la Facultad de Ingeniería Marítima, 
                                    Ciencias Biológicas, Oceánicas y Recursos Naturales, 
                                    FIMCBOR, en el campus Gustavo Galindo Velasco. Cornejo, 
                                    que dirigió la Secretaría Nacional de Gestión de Riesgos entre 2009 y 2015, 
                                    sostiene que la reducción de riesgos de desastres naturales, RRD, 
                                    necesita de cooperación y alianzas.</p>
                            </div>
                        <div className=" col-md-6 second-column text-justify">
                            <p>
                            El Consejo Politécnico de la ESPOL creó el Centro Internacional del Pacífico para la Reducción 
                            del Riesgo de Desastres, CIP-RRD, que está dirigido por María del Pilar Cornejo, quien explicó 
                            que el centro se enfocará en comprender el riesgo de los desastres naturales y fortalecer su gobernanza con el 
                            propósito de reducir los riesgos existentes y prevenir la aparición de otros nuevos.
                             </p>
                        </div> 
                        </div>
                         <div className="row">
                        </div>
                        </div>

                        <div className="container QueHacemos">
                                <div className="row header ">
                                    <div className="col-xs-12 text-center">
                                    <h2 className="primaryColor">Nuestros Proyectos</h2>
                                    </div>
                            </div>

                           <div className="row">
                                <div className="col-md-6 first-column text-justify">
                                <div className="list-group">
                                    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-50 justify-content-between">
                                    <h5 className="mb-1">Datos Costeros </h5>
                                    </div>
                                    <p className="mb-1">Centralizado de los datos maritmos de las
                                    costas del Ecuador para fines de investigación y de prevencion
                                    de catástrofes.</p>
                                    <small className="text-left">2018-Acutalmente</small>
                                    </a>
                                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-50 h-100 justify-content-between">
                                    <h5 className="mb-1">Resclima Dúran</h5>
                                    </div>
                                    <p className="mb-1">destaca la necesidad de ejecutar un estudio que
                                     permita desarrollar un modelo de multiamenazas hidrometeorológicas; 
                                    analizar la vulnerabilidad urbana y riesgos hidroclimáticos/</p>
                                    <small className="text-muted">2016-2017</small>
                                    </a>
                                    </div>
                            </div>
                        <div className=" col-md-6 second-column text-justify">
                                        <h2 className="primaryColor">Misión</h2>
                                        <p>
                                        Consolidar información marino-costera del litoral ecuatoriano para mejorar la capacidad de toma de decisiones sobre los diversos procesos costeros y el análisis de las características de las playas, a través de gráficos estadísticos.
                                        </p>
                                        <h2 className="primaryColor">Visión</h2>
                                        <p>
                                        Crear estadísticas internacionales de las diferentes variables que intervienen en los procesos costeros con el fin de entender su influencia en la población mundial.
                                        </p>
                                    </div>
                                  
                        </div>
                         <div className="row">
                        </div>
                        </div>
                                    <div className="container QueHacemos">
                                <div className="row header ">
                                    <div className="col-xs-12 text-center">
                                    <h2 className="primaryColor">Apoyado</h2>
                                    </div>
                            </div>

                           <div className="row ">
                                

                        </div> 
                        </div>
                         <div className="row">
                        </div>
                        
                               

                        
                            </CardBody>
                        </Card>
                    </div>
                </section>
                </div>
            </section>
        </main>
        );
    }
}

export default Nosotros;