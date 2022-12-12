import React,{useState} from 'react'
import './Slider.css'
import { AiFillCaretLeft,AiFillCaretRight } from 'react-icons/ai';
import { hero } from '../../Data';

const SportsSlide = () => {
const [add,setAdd]=useState(2)
const [fixed,setFixed]=useState(0)
 //sport category function
    const sportcategory = hero.filter(item=>{
      return item.category === 'Sports'
    })
    

    const changeright= ()=>{
      setAdd(add+2)
      setFixed(fixed+2)
      if(sportcategory.length <=add){
        setFixed(0)
         setAdd(2)  
      }
    }

    const changeleft= ()=>{
      setAdd(add+2)
      setFixed(fixed+2)
      if(sportcategory.length <=add){
        setFixed(0)
         setAdd(2)  
      }
    }

  return (
    <div className="slider"> 
    {sportcategory.slice(fixed,add).map(item=>{
      return (
         <div className="container" key={item.id}>
    <img src={item.cover} alt="images" className='imagess'/>
    <div className="bottom-left">
      <h3> {item.title.slice(0,40)}</h3>
      <p>{item.information.slice(0,60)} <strong style={{color:'white'}}>...</strong> </p>
     <a href={`Fullinfo/${item.id}`}>
      <button className='button-8'>More</button>
      </a>
    </div>
   
  </div>
      )

    })}
   
   <AiFillCaretLeft className='iconleft' onClick={()=>changeright()} />
    <AiFillCaretRight className='iconright' onClick={()=> changeright()}/>

  </div>
 
   
  )
 
}

export default SportsSlide


/*
  <>
    <h1>Sports</h1>
    <div className="slider"> 
    <section className='sliderinfo'>
    <img src='https://cdn.pixabay.com/photo/2022/09/05/10/36/grey-seal-7433843_960_720.jpg' className='sliderImg'/>
   <h1 className='slidertext'>Text</h1>
   </section> 
    <img src='https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_960_720.png' className='sliderImg'/>
    <img src='https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_960_720.png' className='sliderImg'/>
     </div> 
      </> 
  


*/