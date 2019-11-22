import React from 'react';
//import '../assets/css/inicio.css'
import Carousels from './Carousels'
import ReactMapboxGl, {ZoomControl, RotationControl, ScaleControl} from 'react-mapbox-gl';

const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1Ijoia2VubnljYW1iYSIsImEiOiJjanlkZHh0YTEwbTFtM21vY2xrdHR2YXM0In0.oH3K5cJipTZlRKf8AdVSfg"
});


class Inicio extends React.Component{
    
    constructor(args){
        super(args);
        this.state = {}
    }

    render(){
        return(
            <div>
                <div className="text-center pt-3 pb-3">
                    <div  className="container-fluid col-md-6 col-sm-9" id="map">
                        <Map style="mapbox://styles/mapbox/streets-v11" 
                            containerStyle={{
                                height: '80vh',
                            }}
                            center={[-79.183403, -1.831239]}
                            zoom={[6]}>
                            <div style={{position: 'absolute', right: 0}}>
                                <ZoomControl/>
                                <ScaleControl/>
                                <RotationControl/>
                            </div>
                        </Map>
                    </div>
                </div>
                <section className="p-5 container">
                    <h2 className="text-left colorTitle">¿Qué hacemos?</h2>
                    <p className="text-justify">
                        Somos un centro de investigación, dentro de ESPOL, enfocado en comprender los riesgos de los desastres naturales y fortalecer su gobernanza con el propósito de reducir los riesgos existentes y prevenir la aparucuón de otros nuevos.
                    </p>
                    
                    <div className="row">
                        <div className="col-md-6 text-justify"> 
                            <h2 className="colorTitle">Misión</h2>
                            <p>
                            Consolidar información marino-costera del litoral ecuatoriano para mejorar la capacidad de toma de decisiones sobre los diversos procesos costeros y el análisis de las características de las playas, a través de gráficos estadísticos.
                            </p>
                        </div>
                        
                        <div className="col-md-6 text-justify"> 
                            <h2 className="colorTitle">Visión</h2>
                            <p>
                            Crear estadísticas internacionales de las diferentes variables que intervienen en los procesos costeros con el fin de entender su influencia en la población mundial.
                            </p>
                        </div>    
                    </div>
                </section>
                <Carousels></Carousels>
                <br/>
            </div>
        );
    };
    
}

export default Inicio;