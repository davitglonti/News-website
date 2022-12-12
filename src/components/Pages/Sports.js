import React from 'react'
import { hero } from '../Data'
import Sacdel from './Sacdel'
export const Sports = () => { 

    const SportPage= hero.filter(item=>{
      return item.category === 'Sports'
    })
   

  return (
 
    <div>
      <h1>Sports</h1>
      {SportPage.map(item=>{
        return (
          <a href={`Fullinfo/${item.id}`}>
                <Sacdel  image={item.cover} information={item.information.slice(0,150)} Author={item.Author} time={item.time} />
     </a>
        )
      })}
    </div>
  )
}
