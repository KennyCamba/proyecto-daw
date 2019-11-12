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
            <form class="form-block my-2 my-lg-0 col-lg-8 col-sm-8 col-md-8 col-xs-3 col-m-8 mx-auto pt-5">
               <p>Nombre: <input class="form-control mr-sm-1"  type="text"></input></p>	
               <p>Apellido: <input class="form-control mr-sm-1" type="text"></input></p>	
               <p>Lugar:    <input  class="form-control mr-sm-1" type="text"></input></p>
               <p>Origen:   <input class="form-control mr-sm-1" type="text"></input></p>
               <p>Correo:   <input class="form-control mr-sm-1" type="text"></input> </p>
               <p>Comentarios</p>
                <p><textarea class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="6"  placeholder="Escriba sus comentarios"  ></textarea></p>
                <button class="btn btn-primary offset-3 col-3   " type="submit">Enviar</button>
                <button class="btn btn-primary offset-1  col-3" type="">   Limpiar</button>
              </form>             
                
            </body>
            
          </div>
        );
    }
}

export default Contactanos;