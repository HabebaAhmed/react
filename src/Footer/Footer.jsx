import React from 'react'

export default function Footer() {
  return (
   <footer className='mt-5'>
    <div className="container text-center mb-4  ">
      <div className="row">
        <div className="col-lg-4 mt-5">
          <div className="cont">
            <h3>LOCATION</h3>
            
            <div className='parg'>2215 John Daniel Drive Clark, MO 65243</div>
          </div>
          </div>
        <div className="col-lg-4 mt-5">
          <div className="cont">
            <h3>AROUND THE WEB</h3>
            <div className='icons'>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-linkedin-in"></i>
              <i class="fa-brands fa-dribbble"></i>
            </div>
          </div>
          </div>
        <div className="col-lg-4 mt-5 ">
          <div className="cont">
            <h3>ABOUT FREELANCER</h3>
            <div className='parg'>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</div>
          </div>
        </div>
      </div>
    </div>
    <p>Copyright © Your Website 2022</p>
   </footer>
  )
}
