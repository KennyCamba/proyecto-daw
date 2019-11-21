import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import imagen1 from '../assets/img/slides/1.jpg';
import imagen2 from '../assets/img/slides/2.jpg';
import imagen3 from '../assets/img/slides/3.jpg';
import '../assets/css/carousels.css';

const items = [
  {
    src: imagen1,
    altText: 'Slide 1',
    caption: 'Slide 1',
    subtitulo: 'Subtitulo slide 1',
  },
  {
    src: imagen2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    subtitulo: 'Subtitulo slide 2',
  },
  {
    src: imagen3,
    altText: 'Slide 3',
    caption: 'Slide 3',
    subtitulo: 'Subtitulo slide 3',
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