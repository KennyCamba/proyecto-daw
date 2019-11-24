import React from 'react';

class Datos extends React.Component{
    constructor(args){
        super(args);
        this.state = {}
    }

    render(){
        return(
            <main ref="main">
                <section className="section section-lg bg-gradient-default">
                    <div className="container"> 
                        <h3 className="text-light">Datos</h3>
                    </div>

                    {/* SVG separator */}
                    <div className="separator separator-bottom separator-skew zindex-100">
                        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0" >
                            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
                        </svg>
                    </div>    
                </section>
            </main>
        );
    }
}

export default Datos;