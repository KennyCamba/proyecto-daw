import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import imagen1 from '../assets/img/slides/manglaralto.jpg';
import imagen2 from '../assets/img/slides/olon.jpg';
import imagen3 from '../assets/img/slides/playas.jpg';
import imagen4 from '../assets/img/slides/salinas.jpg';
import '../assets/css/carousels.css';

const items = [
  {
    src: imagen1,
    altText: 'Manglar Alto',
    caption: 'Manglar Alto',
    subtitulo: 'Estación 1',
  },
  {
    src: imagen2,
    altText: 'Olon',
    caption: 'Olon',
    subtitulo: 'Estación 1',
  },
  {
    src: imagen3,
    altText: 'General Villamil',
    caption: 'General Villamil',
    subtitulo: 'Estación 2',
  },
  {
    src: imagen4,
    altText: 'Salinas',
    caption: 'Salinas',
    subtitulo: 'Estación 3',
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText}/>
        <CarouselCaption captionText={item.subtitulo} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Example;