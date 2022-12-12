import React from 'react'
import Card from '../Card'
import { hero } from '../Data'
import './Pages.css'
import Hero from '../Hero'
const Politics = () => {

  const politics = hero.filter(item=>{
    return item.category== 'Politics'
  })
  console.log(politics)
  return (

    <div className='politics'>
{politics.map(item=>{
 return   <Card key={item.id} cover={item.cover} category={item.category} title={item.title.slice(0,30)} authorName={item.authorName} time={item.time} className={'politicsinfo'} link={item.id}/>
})}
    
    
    </div>
  )
}

export default Politics