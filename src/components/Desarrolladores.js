import React, { Component ,img } from 'react';
import { Container } from 'reactstrap';
import '../assets/css/desarrolladores.css';


class Desarrolladores extends Component {

  render () {
    return (
      <div class="row containerPrin">  
              <div class="row col-12 letra"><h2>Equipo de desarrollo</h2></div>

            <div class="containerDes col-sm-12 col-md-12 col-12 col-lg-3">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" width="265" height="175" ></img>
                
                <div class="containerCard">
                    <h5><b>Steven Araujo</b></h5>
                    <p>Engineer Computer Scinece</p>
                </div>
            </div>
            <div class="containerDes col-sm-12 col-md-12  col-12 col-lg-3">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar"width="265" height="175" ></img>
                
                <div class="containerCard">
                    <h5><b>Kenny Camba</b></h5>
                    <p>Engineer Computer Scinece</p>
                </div>
            </div>
            
            <div class="containerDes col-sm-12 col-md-12  col-12 col-lg-3">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" width="265" height="175"></img>
                
                <div class="containerCard">
                    <h5><b>Christian Guerrero</b></h5>
                    <p>Engineer Computer Scinece</p>
                </div>
            </div>

            <div class="containerDes col-sm-12 col-md-12  col-12 col-lg-3">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" width="265" height="175" />
                
                <div class="containerCard">
                    <h5><b>Joel Espinoza</b></h5>
                    <p>Engineer Computer Scinece</p>
                </div>
            </div>
            
      </div>
      
    );
  }
}

export default Desarrolladores;