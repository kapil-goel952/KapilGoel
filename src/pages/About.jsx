import React from 'react'
import AboutHeroSection from '../Components/about/AboutHeroSection'
import Philosophy from '../Components/work/Phylosophy'
import CoreSkillMatrix from '../Components/about/CoreSkillMatrix'
import CurrentlyExploringToolbox from '../Components/about/CurrentlyExploringToolbox'



const About = () => {
  return (
    <div className='flex flex-col gap-3'>
      <AboutHeroSection/>      
      <CoreSkillMatrix/>
      <CurrentlyExploringToolbox/>
      <Philosophy/>

    </div>
  )
}

export default About
