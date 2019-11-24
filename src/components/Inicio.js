import React from 'react';
//import '../assets/css/inicio.css'
import Carousels from './Carousels'
import ReactMapboxGl, {ZoomControl, RotationControl, Layer, Feature, Popup} from 'react-mapbox-gl';

const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1Ijoia2VubnljYW1iYSIsImEiOiJjanlkZHh0YTEwbTFtM21vY2xrdHR2YXM0In0.oH3K5cJipTZlRKf8AdVSfg"
});


class Inicio extends React.Component{
    
    constructor(args){
        super(args);
        this.state = {
            hasErrors: false,
            stations: {}
        };
        this.hide = this.hide.bind(this);
        this.show = this.show.bind(this);
    }

    hide(id){
        var a = document.getElementById(id);
        a.className = "d-none";
    }

    show(id){
        var a = document.getElementById(id);
        a.className = "";
    }

    componentDidMount(){
        fetch('https://api.myjson.com/bins/gd7r6')
      .then(res => res.json())
      .then(res => this.setState({ stations: res }))
      .catch(() => this.setState({ hasErrors: true }));
    }

    render(){
        const stations = this.state.stations;
        return(
            <section className="section section-lg section-shaped pb-250">
                {/* Circles background */}
                <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                </div>
                {/* SVG separator */}
                <div className="separator separator-bottom separator-skew">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                        className="fill-white"
                        points="2560 0 2560 100 0 100"
                        />
                    </svg>
                </div>
                
                <div className="container">
                    <div className="text-center pb-5">
                        <div  className="container-fluid col-md-6 col-sm-9" id="map">
                            <Map style="mapbox://styles/mapbox/streets-v8" 
                                containerStyle={{
                                    height: '80vh',
                                }}
                                center={[-79.183403, -1.831239]}
                                zoom={[6]}>
                                <div id="controls">
                                    <ZoomControl/>
                                    <RotationControl/>
                                </div>
                                <div id="markers">
                                    { Object.keys(stations).map(k =>(
                                        <div key={"maker" + k}>
                                            <Layer type="symbol"
                                            id={k}
                                            layout={{'icon-image': 'marker-15'}}>
                                            <Feature coordinates={[stations[k].coord.lng, stations[k].coord.lat]} 
                                            onMouseEnter={() => this.show("popup" + k)}
                                            onMouseLeave={() => this.hide("popup" + k)}/>
                                            </Layer>
                                            <div className="d-none" id={"popup" + k}>
                                                <Popup
                                                    coordinates={[stations[k].coord.lng, stations[k].coord.lat]}>
                                                    <div>
                                                        <strong>Nombre: </strong>{stations[k].name} <br/>
                                                        <strong>Ubicación: </strong> {stations[k].parish}, cantón  {stations[k].canton},<br></br>
                                                        provincia de {stations[k].province}<br/>
                                                        <strong>Total de observaciones: </strong>{stations[k].obs}<br/>
                                                        <strong>Última observación: </strong>{stations[k].last_obs}                                                        
                                                    </div>        
                                                </Popup>
                                            </div>
                                        </div> 
                                    ))}
                                </div>
                            </Map>
                        </div>
                    </div>
                    <section className="container card p-5">
                        <h2 className="text-left primaryColor">¿Qué hacemos?</h2>
                        <p className="text-justify">
                            Somos un centro de investigación, dentro de ESPOL, enfocado en comprender los riesgos de los desastres naturales y fortalecer su gobernanza con el propósito de reducir los riesgos existentes y prevenir la aparucuón de otros nuevos.
                        </p>
                        
                        <div className="row">
                            <div className="col-md-6 text-justify"> 
                                <h2 className="primaryColor">Misión</h2>
                                <p>
                                Consolidar información marino-costera del litoral ecuatoriano para mejorar la capacidad de toma de decisiones sobre los diversos procesos costeros y el análisis de las características de las playas, a través de gráficos estadísticos.
                                </p>
                            </div>
                            
                            <div className="col-md-6 text-justify"> 
                                <h2 className="primaryColor">Visión</h2>
                                <p>
                                Crear estadísticas internacionales de las diferentes variables que intervienen en los procesos costeros con el fin de entender su influencia en la población mundial.
                                </p>
                            </div>    
                        </div>
                    </section>
                    <br/>
                    <Carousels></Carousels>
                </div>
            </section>
        );
    };
    
}

export default Inicio;