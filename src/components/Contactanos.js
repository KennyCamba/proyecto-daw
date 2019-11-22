import React from 'react'
import '../assets/css/contactanos.css'
import logo from '../assets/img/barco6x6.svg'


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
              <form className="form-block my-1 my-lg-0 col-lg-8 col-sm-11 col-md-11 col-xs-11 col-12 pt-2">
                <div className="container row text-left">
                  <div className="col-md-6 col-sm-12 col-12">
                    <p>Nombre:</p>
                    <input className="form-control"  type="text"></input>
                  </div>
                  <div className="col-md-6 col-sm-12 col-12">
                    <p>Apellido:</p>
                    <input className="form-control" type="text"></input>
                  </div>
                  <div className="col-md-6 col-sm-12 col-12">
                    <p>Lugar de origen:</p>
                    <input  className="form-control mr-sm-1" type="text"></input>
                  </div>
                  <div className="col-md-6 col-sm-12 col-12">
                    <p>Correo:</p>
                    <input className="form-control mr-sm-1" type="text"></input>
                  </div>
                  <div className="col-md-12 col-sm-12 col-12">
                    <p>Detalle:</p>
                    <textarea className="form-control z-depth-1" id="exampleFormControlTextarea6" rows="6"  placeholder="Escriba sus comentarios" ></textarea>
                  </div>
                  <div className="col-md-12 col-sm-12 col-12">
                    <br/>
                    <button className="btn" type="submit">Enviar</button>
                  </div>
                </div>
              </form>
              <div className="col-lg-4 col-sm-11 col-md-11 col-xs-11 col-12 pt-2">
                <img id="logologin" src={logo} alt="logo"/>
                <p className="text-justify">Gracias por preferirnos estaremos gustosos de atender sus dudas y sugerencias.</p>
              </div>
            </div>
            <br/>
          </div>
        );
    }
}

export default Contactanos;