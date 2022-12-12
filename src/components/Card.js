import React from 'react'
import './cart.css'
const Card = ({id,cover, category,title,authorName,time, className,link}) => {
  return (
    <div className={className} >
      
        <div className='cardimg'>
            <img src={cover} alt='errorIMG' className='cardimage'/>
        </div>
        
        <div className='text'>
            <span className='category'>{category}  </span>
            <h1 className='title'>{title}</h1>

            <div className='author'>
                <span>by {authorName}</span>
                <span>{time}</span>
                <a href={`Fullinfo/${link}`}>
                <button className='button-8' >More</button>
                </a>
            </div>
           
        </div>
       
    </div>
  )
}

export default Card