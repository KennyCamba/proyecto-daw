import React, { Component } from 'react';
import '../assets/css/desarrolladores.css';
import user3 from '../assets/img/users/user3.jpg';

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
                    
                    <div class="container row mx-auto text-center">
                        <div class="card col-md-6 col-12 col-lg-3 col-sm-6  containerDes">
                            <div class="card-body">
                                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" id="avatar" />
                                <h5><b>Steven Araujo</b></h5>
                                <p>Student Engineer Computer Scinece<br/>Member CME</p>
                                <div className="row container text-center offset-2">
                                    <a href="https://www.facebook.com/stevenaraujo98" target="_blank" rel="noopener noreferrer">
                                        <i class="fa fa-facebook pr-3 " aria-hidden="true"></i>
                                    </a>
                                    <a href="https://www.twitter.com/stevenaraujo98" target="_blank" rel="noopener noreferrer">
                                        <i class="fa fa-twitter pr-3" aria-hidden="true"></i>
                                    </a>
                                    <a href="https://www.github.com/stevenaraujo98" target="_blank" rel="noopener noreferrer">
                                        <i class="fa fa-github-alt pr-3" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="card col-md-6 col-12 col-sm-6 col-lg-3 containerDes">
                            <div class="card-body">
                                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" id="avatar" />
                                <h5><b>Kenny Camba</b></h5>
                                <p>Engineer Computer Scinece<br/>Supreme Leader CME</p>
                                <div className="row container text-center offset-2">
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                        <i class="fa fa-facebook pr-3" aria-hidden="true"></i>
                                    </a>
                                    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                                        <i class="fa fa-twitter pr-3" aria-hidden="true"></i>
                                    </a>
                                    <a href="https://www.github.com/KennyCamba" target="_blank" rel="noopener noreferrer">
                                        <i class="fa fa-github-alt pr-3" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="card col-md-6 col-12 col-sm-6 col-lg-3 containerDes">
                            <div class="card-body">
                                <img src={user3} alt="Avatar" id="avatar" />
                                <h5><b>Christian Guerrero</b></h5>
                                <p>Student Engineer Computer Scinece<br/>Aspirant CME</p>
                                <div className="row container text-center offset-2">
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                        <i class="fa fa-facebook pr-3" aria-hidden="true"></i>
                                    </a>
                                    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                                        <i class="fa fa-twitter pr-3" aria-hidden="true"></i>
                                    </a>
                                    <a href="https://www.github.com/chjoguer" target="_blank" rel="noopener noreferrer">
                                        <i class="fa fa-github-alt pr-3" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="card col-md-6 col-12 col-sm-6 col-lg-3 containerDes">
                            <div class="card-body">
                                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" id="avatar" />
                                <h5><b>Joel Espinoza</b></h5>
                                <p>Students Engineer Computer Scinece <br/>Student hidden </p>
                                <div className="row container text-center offset-2">
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                        <i class="fa fa-facebook pr-3" aria-hidden="true"></i>
                                    </a>
                                    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                                        <i class="fa fa-twitter pr-3" aria-hidden="true"></i>
                                    </a>
                                    <a href="https://www.github.com/KennyCamba" target="_blank" rel="noopener noreferrer">
                                        <i class="fa fa-github-alt pr-3" aria-hidden="true"></i>
                                    </a>
                                </div>
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