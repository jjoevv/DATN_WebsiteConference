import React from 'react'
import { useAuth } from '../../context/AuthContext'


import SlideShow from '../../components/SlideShow'
import Conference from '../../components/Conference'
const Homepage = () => {
    const auth = useAuth()  
  return (
    <div>        
        <SlideShow/>
        <Conference/>
    </div>
    
  )
}

export default Homepage