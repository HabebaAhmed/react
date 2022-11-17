import React from 'react';
import home from '../images/cabin.png'
import cake from '../images/cake.png';
import circus from '../images/circus.png';
import game from '../images/game.png';
import safe from '../images/safe.png';
import sub from '../images/submarine.png';
import $ from 'jquery/dist/jquery.min.js';

export default function Portfolio() {
  let box=document.getElementsByClassName('bigLayer')
  let header=document.getElementById('letter');
  let image=document.getElementById('image');


  function open(e){
  console.log(e.target.alt);
  $('#layer').css({
    display:'block'
  })
  console.log(e.target.alt);
  console.log(e.target.src);
  $('#letter').text(e.target.alt);
  $('#image').attr('src',e.target.src);
  }
  function close(){
    $('#layer').css({
      display:'none'
    })
  }
  return (
      <section className="port">
        <h2 >PORTFOLIO</h2>
        <div className=' d-flex flex-row justify-content-center align-items-center'>
          <div className='line'></div>
          <i class="fa-solid fa-star m-1"></i>
          <div className='line'></div>
        </div>
        <div className='bigLayer p-5 ' id='layer'>
          
          <div className='bg-body  m-auto p-3'>
          <i class="fa-solid fa-xmark" onClick={close}></i>
          <h2 id='letter'></h2>
              <div className='mb-3 d-flex flex-row justify-content-center align-items-center'>
                <div className='line'></div>
                <i class="fa-solid fa-star m-1"></i>
                <div className='line'></div>
            </div>
            <div className='img-p'>
            <img className=' rounded' src='' alt="" id='image' />
            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
            <button className='btn text-white' onClick={close}>close window</button>
            </div>
          </div>
        </div>
        
        <div className="container mt-4">
          <div className="row g-5">
          <div className="col-md-4">
            <div className="content "onClick={(e)=>{open(e)}}  >
              <img className=' rounded' src={home} alt="LOG CABIN" />
              
            </div>
          </div>
          <div className="col-md-4">
            <div className="content" onClick={(e)=>{open(e)}}>
              <div className='rounded'>
                <img className='rounded' src={cake} alt="TASTY CAKE" />
              </div>
              
            </div>
          </div>
          <div className="col-md-4">
            <div className="content rounded" onClick={(e)=>{open(e)}}>
              <div>
                <img className='rounded' src={circus} alt="CIRCUS TENT" />
              </div>
              
            </div>
          </div>
          <div className="col-md-4">
            <div className="content" onClick={(e)=>{open(e)}}>
              <div>
                <img className=' rounded' src={game} alt="CONTROLLER" />
              </div>
             
            </div>
          </div>
          <div className="col-md-4">
            <div className="content" onClick={(e)=>{open(e)}}>
              <div>
                <img className=' rounded' src={safe} alt="LOCKED SAFE" />
              </div>
              
            </div>
          </div>
          <div className="col-md-4">
            <div className="content"onClick={(e)=>{open(e)}}>
              <div className='ayhaga'>
                <img className='rounded' src={sub} alt="SUBMARINE" />
              </div>
              
            </div>
          </div>
          </div>
        </div>
        
        
      </section>
  )
}
