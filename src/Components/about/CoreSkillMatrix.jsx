import React from 'react'
import CoreSkills from './CoreSkills'
import SkillMatrix from './SkillsMatrix'

const CoreSkillMatrix = () => {
  return (

    <section className='w-full mt-6'>

      <div
        className=' m-5
          flex
          flex-col
          lg:flex-row
          gap-6
          w-full
        '
      >

        {/* Core Skills */}
        <div className='flex-1'>
          <CoreSkills />
        </div>

        {/* Skill Matrix */}
        <div className='flex-1'>
          <SkillMatrix />
        </div>

      </div>

    </section>

  )
}

export default CoreSkillMatrix