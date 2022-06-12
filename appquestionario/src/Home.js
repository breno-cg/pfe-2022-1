import React from 'react'
import { CarouselItem } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import Port2 from './img/port2.jpg';
import Port1 from './img/port1.jpg';
import Port3 from './img/port3.jpg';
import Port4 from './img/port4.jpg';
import Port5 from './img/port5.jpg';

const Home = () => {
  return (
    <section>
   <div>
    <Carousel>
      <CarouselItem>
       <img src={Port2} style={{width:"100%"}}/>
      </CarouselItem>
      <CarouselItem>
       <img src={Port1} style={{width:"100%"}}/>
      </CarouselItem>
      <CarouselItem>
       <img src={Port3} style={{width:"100%"}}/>
      </CarouselItem>
      <CarouselItem>
       <img src={Port4} style={{width:"100%"}}/>
      </CarouselItem>
      <CarouselItem>
       <img src={Port5} style={{width:"100%"}}/>
      </CarouselItem>
    </Carousel>
   </div>
   </section>
  )
}

export default Home