import React from 'react'
import CurrentlyExploring from './CurrentlyExploring'
import Toolbox from './Toolbox'

const RecentlyExploringToolbox = () => {
  return (

    <section className='w-full mt-6'>

      <div
        className='
          flex
          flex-col
          lg:flex-row
          gap-6
          w-full
        '
      >

        {/* Currently Exploring */}
        <div className='flex-1'>
          <CurrentlyExploring />
        </div>

        {/* Toolbox */}
        <div className='flex-1'>
          <Toolbox />
        </div>

      </div>

    </section>

  )
}

export default RecentlyExploringToolbox