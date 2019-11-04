import React from 'react';
import '../assets/css/inicio.css'

class Inicio extends React.Component{
    constructor(args){
        super(args);
        this.state = {}
    }

    render(){
        return(
            <div>
                <div class="text-center pt-3 pb-3" id="top">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d4083686.376528958!2d-78.64836162031612!3d-1.747012818996161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgoogle%20maps!5e0!3m2!1ses!2sec!4v1572844734476!5m2!1ses!2sec" frameborder="0" allowfullscreen="" class="container-fluid col-md-6 col-sm-9" id="map"></iframe>
                </div>
                <section class="p-5 container">
                    <h2 class="text-left">¿Qué hacemos?</h2>
                    <p class="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium.
                    </p>
                    
                    <div class="row">
                        <div class="col-md-6 text-justify"> 
                            <h2>Mision</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscin  Lorem ipsum dolor sit amet, consectetur adipiscing  Nulla quam velit, vulputate eu pharetra nec, mattis elitac neque. Duis vulputate commodo lectus, ac blan elit tincidunt id. 
                            </p>
                        </div>
                        
                        <div class="col-md-6 text-justify"> 
                            <h2>Vision</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscin  Lorem ipsum dolor sit amet, consectetur adipiscing  Nulla quam velit, vulputate eu pharetra nec, mattis elitac neque. Duis vulputate commodo lectus, ac blan elit tincidunt id. 
                            </p>
                        </div>    
                    </div>
                </section>
            </div>
        );
    };
}

export default Inicio;