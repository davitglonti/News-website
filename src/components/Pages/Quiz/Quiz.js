import React,{useState} from 'react'
import { Quiz1 } from './QuizData'
import './Quiz.css'


const Quiz = () => {


  const [CorrectChecker,setCCorrectChecker]=useState(false)
  const [Score,setScore]=useState(0)
  const [nextQuestion, setNextQuestion]=useState(0)
  const [GameOver, setGameOver]=useState(false)
  const [berserk,setberserk]=useState()
 
console.log(CorrectChecker)
const Restart = () =>{
  setGameOver(false);
  setScore(0);
  setNextQuestion(0)
}

 const Checker =(item) =>{
if(item==='true'){
  setScore(Score+1)
}
 setNextQuestion(nextQuestion+1)
   
    //gameOver Checker
   if(nextQuestion===Quiz1.length-1){
  setGameOver(true)
  }
 }


return (
 <div>
  {GameOver? 
   <div className='GAMEOVER'>
        <div className='gameoverinfo'>
      <h1>Game over bro</h1>
      <h1>Score: {Score}</h1>
      </div>

        <section>
          <button onClick={()=>Restart()}>Restart</button>
        </section>
   </div>
        
  :
   < >
     <h1>Quiz</h1>
     <img src= {Quiz1[nextQuestion].image} className='Quizimage'/>
     <br/>
      
     {Quiz1[nextQuestion].Question}
     <div className='answers' >
      {Quiz1[nextQuestion].Answers.map(item=>{
        return (
          <div key={item.id}>
          <button className='button-52' onClick={()=>Checker(item.Correct)}>{item.answer} </button>
          </div>
        )
      })}
     </div>
    
      
   </>
    
  }
      

       


    </div>
  )
}

export default Quiz