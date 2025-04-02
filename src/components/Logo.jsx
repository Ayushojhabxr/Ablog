import React from 'react'
import Ablog from '../assets/Ablog.png'

function Logo() {
  return (
    <div className="flex items-center justify-center p-2">
      <img 
        src={Ablog} 
        alt="Logo" 
        className="h-16 w-16 rounded-full shadow-md bg-white" 
      />
    </div>
  )
}

export default Logo