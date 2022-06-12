import React from 'react';
import Img0 from './img/galeria/img0.jpg';
import Img1 from './img/galeria/img1.jpg';
import Img2 from './img/galeria/img2.jpg';
import Img3 from './img/galeria/img3.jpg';
import Img4 from './img/galeria/img4.jpg';
import Img5 from './img/galeria/img5.jpg';
import Img6 from './img/galeria/img6.jpg';
import Img7 from './img/galeria/img7.jpg';
import Img8 from './img/galeria/img8.jpg';
import Img9 from './img/galeria/img9.jpg';
import Img10 from './img/galeria/img10.jpg';
import Img11 from './img/galeria/img11.jpg';
import Img12 from './img/galeria/img12.jpg';
import Img13 from './img/galeria/img13.jpg';
import Img14 from './img/galeria/img14.jpg';
import Img15 from './img/galeria/img15.jpg';
import Img16 from './img/galeria/img16.jpg';
import Img17 from './img/galeria/img17.jpg';



const Galeria = () => {
  return (
    <section>
    <div className='row'>
      <div className='column'>
      <img src={Img0} style={{width:"100%"}}/>
      <img src={Img1} style={{width:"100%"}}/>
      <img src={Img2} style={{width:"100%"}}/>
      <img src={Img3} style={{width:"100%"}}/>
      <img src={Img4} style={{width:"100%"}}/>
      <img src={Img12} style={{width:"100%"}}/>
      </div>
      <div className='column'>
      <img src={Img6} style={{width:"100%"}}/>
      <img src={Img7} style={{width:"100%"}}/>
      <img src={Img8} style={{width:"100%"}}/>
      <img src={Img9} style={{width:"100%"}}/>
      <img src={Img10} style={{width:"100%"}}/>
      <img src={Img11} style={{width:"100%"}}/>
      </div>
      <div className='column'>
      <img src={Img5} style={{width:"100%"}}/>
      <img src={Img13} style={{width:"100%"}}/>
      <img src={Img14} style={{width:"100%"}}/>
      <img src={Img15} style={{width:"100%"}}/>
      <img src={Img16} style={{width:"100%"}}/>
      <img src={Img17} style={{width:"100%"}}/>
      </div>
      
    </div>
    </section>
  )
}

export default Galeria;