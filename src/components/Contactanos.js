import React from 'react'
import '../assets/css/contactanos.css'

class Contactanos extends React.Component {
    constructor(args){
        super(args);
        this.state = {}
    }

    render(){
        return(
            <div className="App">
            <body>
              <div class="containerContact">
              <div class="row">
                
              <form class="form-block  mx-auto pt-55">
               <p>Nombre: <input class="form-control mr-sm-1"  type="text"></input></p>	
               <p>Apellido: <input class="form-control mr-sm-1" type="text"></input></p>	
               <p>Correo:   <input class="form-control mr-sm-1" type="text"></input> </p>
               <p>Comentarios</p>
                <p><textarea class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="6"  placeholder="Escriba sus comentarios"  ></textarea></p>
                <button class="btn btn-primary  ml-5 col-5" type="button">Enviar</button>
                <button class="btn btn-primary ml-5 pd col-5" type="">   Limpiar</button>
              </form>
              </div>
              </div>    
            </body>
          </div>
        );
    }
}

export default Contactanos;