import React from 'react'
import './Sacdel.css'
import { hero } from '../Data'
const Sacdel = ({title,image,information, Author,time, category}) => {
  return (
    <div className="container">
      	
    <div className="product-details">
      <h4>{title}</h4>
      <p className="information">{information}</p>
      <div className="control">
        <button className="btn">
        <div className='more'>
          <span className="buy">More</span>
          </div>
        </button>
      </div>
    </div>
    <div className="product-image">
      <img src={image} alt="aaaj" />
      <div className="info">
        <h2> NewsInfo</h2>
        <ul>
          <li><strong>Author : </strong>{Author} </li>
          <li><strong>Time : </strong>{time}</li>
          <li><strong>category: </strong>{category}</li>
         
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Sacdel


/*

 <>
      {hero.map(item=>{
        return (
          <>  
           <div className="container">
          <div className="product-details">
      <h1></h1>
      <p className="information">" Let's spread the joy , here is Christmas , the most awaited day of the year.Christmas Tree is what one need the most. Here is the correct tree which will enhance your Christmas.</p>
      <div className="control">
        <button className="btn">
       
          <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true" /></span>
          <span className="buy">Get now</span>
        </button>
      </div>
    </div>
    <div className="product-image">
      <img src="https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
      <div className="info">
        <h2> Description</h2>
        <ul>
          <li><strong>Height : </strong>5 Ft </li>
          <li><strong>Shade : </strong>Olive green</li>
          <li><strong>Decoration: </strong>balls and bells</li>
          <li><strong>Material: </strong>Eco-Friendly</li>
        </ul>
      </div>
    </div> 
     </div>
    </>
        )
      })}	
    </>


*/