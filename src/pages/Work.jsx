import React from 'react'
import Herosection from '../Components/work/WorkHerosection'
import WorkProject from '../Components/work/WorkProject'
import HaveIdea from '../Components/work/HaveIdea'



const Work = () => {
   return(
    <div className='flex flex-col gap-2'>
        <Herosection/>
        <WorkProject/>
       <HaveIdea/>
    </div>
   )

}

export default Work
