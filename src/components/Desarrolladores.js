import React, { Component ,img } from 'react';
import '../assets/css/desarrolladores.css';


class Desarrolladores extends Component {

  render () {
    return (
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
                    <h2 className="text-light">Equipo de desarrollo</h2>
                    
                    <div class="container row mx-auto">
                        <div class="card col-md-3 col-12 col-lg-3 col-sm-6 containerDes">
                            <div class="card-body">
                                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" id="avatar" />
                                <h5><b>Steven Araujo</b></h5>
                                <p>Engineer Computer Scinece</p>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/stevenaraujo98">[Perfil]</a>
                            </div>
                        </div>
                        
                        <div class="card col-md-3 col-12 col-sm-6 col-lg-3 containerDes">
                            <div class="card-body">
                                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" id="avatar" />
                                <h5><b>Kenny Camba</b></h5>
                                <p>Engineer Computer Scinece</p>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/KennyCamba">[Perfil]</a>
                            </div>
                        </div>
                        
                        <div class="card  col-md-3 col-sm-6 col-12 col-lg-3 containerDes">
                            <div class="card-body">
                                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" id="avatar" />
                                <h5><b>Christian Guerrero</b></h5>
                                <p>Engineer Computer Scinece</p>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/chjoguer">[Perfil]</a>
                            </div>
                        </div>

                        <div class="card col-md-3 col-sm-6 col-12 col-lg-3 containerDes">
                            <div class="card-body">
                                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" id="avatar" />
                                <h5><b>Joel Espinoza</b></h5>
                                <p>Engineer Computer Scinece</p>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/joeaespi">[Perfil]</a>
                            </div>
                        </div>    
                    </div>
                </div>
            </section>
        </main>

      
    );
  }
}

export default Desarrolladores;