import React,{useState} from 'react'
import { hero } from '../../Data'
import '../Pages.css'
import Category from './Category'
import { ImExit } from 'react-icons/im';

const RandomNews = () => {
const [checker,setChecker]=useState(false)
const [randomNumber,setRandomNumber]=useState()
const [randomNews, setRandomNews]=useState(hero)
    const click=()=>{
      setRandomNumber(Math.floor(Math.random() *randomNews.length ));
        setChecker(true)
    
    }

    const category= (categor) =>{
    const randomCategory = hero.filter(item=>{
      return item.category  === categor
    })
    setRandomNews(randomCategory)
    }
    
 
   

  return (
    <div>
        {checker ?
            <div>
              <section className='randomheadflex'>
                 <h1 className='randomTitle'>RandomNews</h1>
                 <div style={{backgroundColor:'#FFD700'}}>
                 <h1>{randomNews[randomNumber].category}</h1>
                 </div>
                 </section>
<h1>{randomNews[randomNumber].title}</h1>
<ImExit style={{fontSize:'40px', position:'relative',top:'20px'}} className='randomExit' onClick={()=> setChecker(false)}/>
<button className='button-36' onClick={()=>click()}>Random</button>
                </div>
        :
        <>
        <h1 className='randomTitle'>
          Random News
        </h1>
        <button className='button-36' onClick={()=>click()}>Random</button>
         <section> 
          <button onClick={()=>category('Sports')} className='button-52' >Sports</button>
          <button onClick={()=>category('Politics')} className='button-52'>Politics</button>
          <button onClick={()=>category('Archeology')}className='button-52'>Archeology</button>
         </section>
   </>
   }
      

       
    </div>
  )
}

export default RandomNews