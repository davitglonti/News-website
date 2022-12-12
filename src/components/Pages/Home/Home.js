import React from 'react'
import Main from './Main'
import Hero from '../../Hero'
import SportsSlide from './SportsSlide'
import RandomNews from './RandomNews'
import Quiz from '../Quiz/Quiz'

const Home = () => {

  return (
    <div>
      
      <Hero/>
      <Main/>
      <SportsSlide/>
      <RandomNews/>
    </div>
  )
}

export default Home