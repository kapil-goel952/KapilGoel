import React from 'react'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './Components/navbar'
import Footer from './Components/footer'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import NotFound from './Components/404Notfound'



const App = () => {
  return (
    <div className='px-30 font-serif w-screen min-h-screen bg-black'>
      <div className='bg-gray-950 flex flex-col gap-2'>
        <Navbar />

        <div className='grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Work' element={<Work />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />

             <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  )
}
// Creative developer focused on building immersive and meaningful experiences
export default App


