import React from 'react'

export default function About() {
  return (
    <section className='about pt-4 pb-4 text-center'>
      <h2 >ABOUT</h2>
        <div className=' d-flex flex-row justify-content-center align-items-center'>
          <div className='line'></div>
          <i class="fa-solid fa-star m-1"></i>
          <div className='line'></div>
        </div>
        <div className='paragraph mt-4 text-start m-auto'>
          <div className="row">
            <div className="col-lg-6">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-lg-6">
              <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
            </div>
          </div>
        </div>

    </section>
  )
}
