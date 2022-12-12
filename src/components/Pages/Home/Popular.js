import React from 'react'
import { hero } from '../../Data'
import Card from '../../Card'

const Popular = ({information}) => {
  return (
    
    <div >
        <section style={{fontSize:'30px',margin:'30px', textAlign:'center'}}> Popular</section>
        <div className='Popular'>
         {information.map((item)=> {
           return <Card key={item.id} cover={item.cover} category={item.category} title={item.title} authorName={item.authorName} time={item.time} className={'popularborder'} link={item.id}/>
       
        })}
         
        
        </div>
    </div>
  )
}

export default Popular