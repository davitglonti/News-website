import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import './Home.css'

const Category = ({Categorychoose}) => { 
    
  return (
    <>
    <div className='category'>
       <button className='button-8' onClick={()=>Categorychoose('Politics')}>Politics</button>
       <button className='button-8' onClick={()=>Categorychoose('Sports')}>Sports</button>
       <button className='button-8' onClick={()=>Categorychoose('Bussiness')}>Bussiness</button>
       <button className='button-8' onClick={()=>Categorychoose('Fashion')}>Fashion</button>
       <button className='button-8' onClick={()=>Categorychoose('Fun')}>Fun</button>
    </div>
    <div className='Subscribe' style={{textAlign:'center'}}>
      <h2 >Subscribe</h2>
      <a href='https://www.facebook.com/'>
      <FaFacebook  className='Icons' style={{color:'blue'}}/>
      </a>
      <a href='https://www.youtube.com/' style={{color:'red'}}>
      <AiFillYoutube className='Icons'/>
     
      </a>
      <a href='https://www.instagram.com/'>
      <BsInstagram className='instagramIcons'/>
      </a>
    </div>
     <section style={{height:'200px', fontSize:'40px'}}>
      <a href='Quiz'>
      <button className='button-85'>Quiz Game </button>
      </a>
     </section>
    </>
  )
}

export default Category