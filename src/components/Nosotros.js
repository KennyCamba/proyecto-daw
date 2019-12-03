import React from 'react';
import {Card, CardBody} from 'reactstrap';

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

                           <div class="row">
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
                         <div class="row">
                        </div>
                        </div>

                        <div class="container QueHacemos">
                                <div className="row header ">
                                    <div className="col-xs-12 text-center">
                                    <h2 className="primaryColor">Nuestros Proyectos</h2>
                                    </div>
                            </div>

                           <div class="row">
                                <div className="col-md-6 first-column text-justify">
                                <div class="list-group">
                                    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
                                    <div class="d-flex w-50 justify-content-between">
                                    <h5 class="mb-1">List group item heading</h5>
                                    <small>3 days ago</small>
                                    </div>
                                    <p class="mb-1">Donec id elit non mi 
                                    porta gravida at eget metus. 
                                    Maecenas sed diam eget risus varius blandit.</p>
                                    <small>Donec id elit non mi porta.</small>
                                    </a>
                                    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                                    <div class="d-flex w-50 justify-content-between">
                                    <h5 class="mb-1">List group item heading</h5>
                                    <small class="text-muted">3 days ago</small>
                                    </div>
                                    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                    <small class="text-muted">Donec id elit non mi porta.</small>
                                    </a>
                                    </div>
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
                         <div class="row">
                        </div>
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