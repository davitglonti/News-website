import React from 'react'
import './Footer.css'
import { GrFormNext } from 'react-icons/gr';

const Footer = () => {
  return (
<div className='Footer'>
  <img src='https://cdn-icons-png.flaticon.com/512/21/21601.png' className='footerLogo'/>
   
 <div className='FooterList'>
    <section className='partners'>
        <ul>
            <h1>Partners</h1>
            <li>BBC</li>
            <li>CNN</li>
            <li>Carefoul</li>
            <li>masterchief</li>
        </ul>
    </section>
    <section className='Brand'>
    <ul>
        <h1>Brand</h1>
        <li >About Us</li>
        <li>Carrers</li>
        <li>Gift</li>
        <li>Contact</li>
    </ul>
    </section>

    <section className='Contact us'>
    <ul>
        <h1>Contact Us</h1>
        <li> Call  +19349430532</li>
        <li>Email : support@supp@com</li>
        <li>Gift</li>
        <li> Country</li>
        <li>Post</li>
        <li>Carrer</li>
       
    </ul>
    </section>
    <section>
        <h1>Sign Up Our NewsLetter to Stay</h1>
        <input type='email'/>
       <GrFormNext style={{fontSize:'40px', position:'relative',top:'15px',color:'red'}}/>
      <h1>Created By D.g</h1>
    </section>

 </div>
  
</div>
  )
}

export default Footer