import React from 'react';

class Datos extends React.Component{
    constructor(args){
        super(args);
        this.state = {}
    }

    render(){
        return(
            <div>
                <br/>
                <h3 className="colorTitle">Datos</h3>
                <hr className="secundaryColor"/>
            </div>
        );
    }
}

export default Datos;