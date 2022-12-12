import React from 'react'
import Sacdel from './Sacdel'
import { hero } from '../Data'
import Error from '../Error'
export const HotNews = () => {
  console.log(hero)
  return (
   
    <div className='hotnews'>
      {hero.map(item=>{
        return (
          <a href={`Fullinfo/${item.id}`}>
                <Sacdel title={item.title.slice(0,50)} image={item.cover} information={item.information.slice(0,150)} Author={item.Author} time={item.time} category={item.category}/>
     </a>
        )
      })}

    </div>
   
  )
}
