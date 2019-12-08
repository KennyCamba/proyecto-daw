import React from 'react';
import {UncontrolledCarousel} from 'reactstrap';

import '../assets/css/carousels.css';

class Carousels extends React.Component {

  render (){
    return(   
    <>
      <UncontrolledCarousel items={this.props.items}/>
    </>
    );
  };
}

export default Carousels;