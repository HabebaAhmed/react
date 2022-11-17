import React from 'react';
import homeImg from '../images/avataaars.svg'


export default function Home() {
  return (
    <section className='home d-flex flex-column  justify-content-center align-items-center'>
      
      
        <div>
          <img  src={homeImg} alt="" />
        </div>
    
        <h1 className='pt-2'>START REACT</h1>
        <div className=' d-flex flex-row justify-content-center align-items-center'>
          <div className='line'></div>
          <i class="fa-solid fa-star"></i>
          <div className='line'></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      

    </section>
  )
}
