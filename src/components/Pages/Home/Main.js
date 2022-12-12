import React,{useState} from 'react'
import './Home.css'
import { hero } from '../../Data'
import Popular from './Popular'
 import Category from './Category'
const Main = () => {
    const [information,setInformation]=useState(hero)
  
    
//category filter function
    const Categorychoose=(choose) =>{
        console.log(choose)
        const ChangeCategory = hero.filter(Hero=> Hero.category=== choose)
        setInformation(ChangeCategory)
        }
  return (
    <div className='main'>
        <section className='MainLeft'>
            <div className='popularitem'>
            <Popular information={information}/>
            </div>
        </section>
        <section className='MainRight'>
       <Category  Categorychoose={Categorychoose}/>
        </section>
    </div>
  )
}

export default Main