import React from 'react'
import LogoImage  from '../assets/LogoImage.png'
function Logo({width = "30px"}) {
  
    return (
      <div className="w-20 md:w-32 lg:w-40">
        <img src= {LogoImage} alt="" className='w-10 rounded-md ml-2' />
        </div>
      )
}

export default Logo
