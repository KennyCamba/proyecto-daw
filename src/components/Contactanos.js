import React from 'react'

class Contactanos extends React.Component {
    constructor(args){
        super(args);
        this.state = {}
    }

    render(){
        return(
            <div className="App">
            <body>
              <div class="row">
              <form class="form-block my-2 my-lg-0 col-lg-5 col-sm-3 col-md-5 col-xs-3 mx-auto pt-5">
               <p> Nombre: <input class="form-control mr-sm-1"  type="text"></input></p>	
               <p> Apellido: <input class="form-control mr-sm-1" type="text"></input></p>	
               <p>Correo:   <input class="form-control mr-sm-1" type="text"></input> </p>
               <p>Comentarios</p>
                <p><textarea class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="6"  placeholder="Escriba sus comentarios"  ></textarea></p>
                <button class="btn btn-primary offset-3 col-3" type="button">Enviar</button>
                <button class="btn btn-primary offset-1  col-3" type="">   Limpiar</button>
              </form>
              </div>    
            </body>
          </div>
        );
    }
}

export default Contactanos;