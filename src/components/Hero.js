import React, {useState} from 'react'
import { hero } from './Data'
import Card from './Card'
import './cart.css'
const Hero = () => {
    const [items,setItems]=useState(hero)

  return (
    <div className='hero'>
        {items.slice(0,4).map((item)=> {
            return <Card key={item.id} cover={item.cover} category={item.category} title={item.title} authorName={item.authorName} time={item.time} className={'box'}/>
        })}
    </div>
  )
}

export default Hero