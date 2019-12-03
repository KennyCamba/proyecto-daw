import React from 'react';
import {UncontrolledCarousel} from 'reactstrap';

import imagen1 from '../assets/img/slides/manglaralto.jpg';
import imagen2 from '../assets/img/slides/olon.jpg';
import imagen3 from '../assets/img/slides/playas.jpg';
import imagen4 from '../assets/img/slides/salinas.jpg';
import '../assets/css/carousels.css';

const items = [
  {
    src: imagen1,
    altText: 'Manglar Alto',
    header: 'Manglar Alto',
    caption: 'Estación 1',
  },
  {
    src: imagen2,
    altText: 'Olón',
    header: 'Olón',
    caption: 'Estación 1',
  },
  {
    src: imagen3,
    altText: 'General Villamil',
    header: 'General Villamil',
    caption: 'Estación 2',
  },
  {
    src: imagen4,
    altText: 'Salinas',
    header: 'Salinas',
    caption: 'Estación 3',
  }
];

class Carousels extends React.Component {


  render (){
    return(   
    <>
      <UncontrolledCarousel items={items}/>
    </>
    );
  };
}

export default Carousels;