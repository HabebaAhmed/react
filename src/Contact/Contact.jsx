import React from 'react'

export default function Contact() {
  return (
    <section className='contact'>
       <h2 >CONTACT</h2>
        <div className=' d-flex flex-row justify-content-center align-items-center'>
          <div className='line'></div>
          <i class="fa-solid fa-star m-1"></i>
          <div className='line'></div>
        </div>
        <form className='w-50 m-auto' >
          <input type="text" className='form-control' placeholder='Name' />
          <input type="text" className='form-control' placeholder='Email Address' />
          <input type="text" className='form-control' placeholder='Phone Number' />
          <input type="text" className='form-control' placeholder='Message' />
          <button className='btn btn-info text-white'> Send</button>
        </form>
    </section>
  )
}
