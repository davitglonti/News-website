import React from 'react'
  import { useParams } from 'react-router-dom';
  import { hero } from '../Data';
  import Card from '../Card';
  import Category from './Home/Category';
const Fullinfo = () => {
  let params = useParams();


   const info = hero.filter(item=>{
    return item.id == params.id;
   })
   
  
  return (
    <div className='fullinfo'>
    <div>
      <h1>{info[0].title}</h1>
      <img src={info[0].cover} />
      <p>{info[0].information}</p>
  
    </div>
    <div className='MainRight'>
       <Category  />
        </div>
    
</div>
  )
}

export default Fullinfo