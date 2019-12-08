import React from "react";
import '../../assets/css/login.css';
import {
    Button,
    FormGroup,
    Form,
    Row,
    Col,
    Label,
} from "reactstrap";
import ReactMapboxGl, { ZoomControl } from 'react-mapbox-gl';
import { geolocated } from "react-geolocated"

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

const api = "pk.eyJ1Ijoia2VubnljYW1iYSIsImEiOiJjanlkZHh0YTEwbTFtM21vY2xrdHR2YXM0In0.oH3K5cJipTZlRKf8AdVSfg"
const Map = ReactMapboxGl({
    accessToken: api
});

var marker = null;
var popup = null;

class Estacion extends React.Component {

    constructor(args) {
        super(args);
        this.geolocated = this.geoLocate.bind(this);
        this.lat = React.createRef();
        this.lng = React.createRef();
        this.prov = React.createRef();
        this.cant = React.createRef();
        this.parr = React.createRef();
        this.state = {
            mapa: {},
            isLoad: false
        }
        this.hide = this.hide.bind(this);
        this.show = this.show.bind(this);
    }

    addMaker(lat, lng) {
        if (marker != null) {
            marker._element.remove();
            popup.remove();
        }
        marker = new mapboxgl.Marker({ draggable: true })
            .setLngLat({ lng: lng, lat: lat })
            .addTo(this.state.mapa);

        popup = new mapboxgl.Popup({
            offset: 25,
            closeButton: false,
            closeOnClick: false
        });

        var map = this.state.mapa;

        marker._element.onmouseenter = function () {
            var cor = marker._lngLat
            popup.setLngLat(cor);
            popup.setHTML('<div><p>Lat: ' + cor.lat + '</p> <p> Lng: ' + cor.lng + '<p/></div>');
            popup.addTo(map);
        }

        marker._element.onmouseleave = function () {
            popup.remove();
        }

        marker.on("dragend", () => this.fullInput(marker._lngLat.lat, marker._lngLat.lng));
    }

    fullInput(lat, lng) {
        this.lat.current.value = lat;
        this.lng.current.value = lng;
        var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + lng + "," + lat + ".json?access_token=" + api;
        fetch(url)
            .then(res => res.json())
            .then(json => {
                var geo = json.features[0];
                this.cant.current.value = geo.context[0].text;
                this.prov.current.value = geo.context[1].text;
            })
            .catch(() => alert("Por favor, llene los campos de localización"))
    }

    geoLocate(props) {
        if (!props.isGeolocationAvailable) {
            alert("Your browser does not support Geolocation");
        } else if (!props.isGeolocationEnabled) {
            alert("Geolocation is not enabled");
        } else {
            var lat = props.coords.latitude;
            var lng = props.coords.longitude;
            if (this.state.isLoad) {
                this.state.mapa.flyTo({
                    center: [lng, lat],
                    zoom: 15
                });
                this.addMaker(lat, lng);
            }
            this.fullInput(lat, lng);
        }
    }

    hide(id) {
        var a = document.getElementById(id);
        a.className = "d-none";
    }

    show(id) {
        var a = document.getElementById(id);
        a.className = "";
    }

    render() {
        if (this.state.isLoad) {
            this.state.mapa.on("click", (e) => {
                this.addMaker(e.lngLat.lat, e.lngLat.lng);
                this.fullInput(e.lngLat.lat, e.lngLat.lng)
            });
        }
        return (
            <main ref="main">
                <section className="section-shaped">
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
                    <Form>
                        <h3 className="text-center colorTitle"><strong>Registro de Estación</strong></h3>
                        <FormGroup>
                            <Label for="EjemploNombre">Nombre</Label>
                            <input type="text" className="form-control" name="nombre" id="EjemploNombre" placeholder="Escriba el nombre" />
                        </FormGroup>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="EjemploLatitud">Latitud</Label>
                                    <input type="number" className="form-control" ref={this.lat} name="latitud" id="EjemploLatitud" placeholder="Indique la latitud" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="EjemploLongitud">Longitud</Label>
                                    <input type="number" className="form-control" ref={this.lng} name="logintud" id="EjemploLatitud" placeholder="Indique la longitud" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="EjemploProvincia">Provincia</Label>
                                    <input type="text" className="form-control" ref={this.prov} name="provincia" id="EjemploProvincia" placeholder="Escoga la provincia" />
                                </FormGroup>
                            </Col>
                            <div className="container-fluid col-md-6 col-sm-12">
                                <Map style={"mapbox://styles/mapbox/streets-v8"}
                                    containerStyle={{
                                        height: '40vh',
                                    }}
                                    center={[-79.183403, -1.831239]}
                                    zoom={[5]}
                                    onStyleLoad={map => {
                                        this.setState({ isLoad: true, mapa: map });
                                    }}>
                                    <div id="controls">
                                        <ZoomControl />
                                        <img
                                            id="locate"
                                            src="https://osl.ugr.es/CTAN/graphics/asymptote/GUI/res/icons/android-locate.svg"
                                            onClick={() => this.geoLocate(this.props)} />
                                    </div>
                                </Map>
                            </div>
                        </Row>

                        <Row>
                            <div className="container-fluid col-md-6 col-sm-12">
                                <FormGroup>
                                    <Label for="EjemploCanton">Canton</Label>
                                    <input type="text" className="form-control" ref={this.cant} name="canton" id="EjemploCanton" placeholder="Escoga el canton" />
                                </FormGroup>
                            </div>
                            <div className="container-fluid col-md-6 col-sm-12">
                                <FormGroup>
                                    <Label for="EjemploParroquia">Parroquia</Label>
                                    <input type="text" className="form-control" ref={this.parr} name="parroquia" id="EjemploParroquia" placeholder="Escoga la parroquia" />
                                </FormGroup>
                            </div>
                        </Row>
                        <Button>Guardar</Button>
                        <p></p>
                        <p></p>
                        <p></p>
                    </Form>
                </section>
            </main>);
    }
}
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Estacion);