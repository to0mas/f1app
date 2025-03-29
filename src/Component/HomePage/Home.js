import React from 'react'
import './Home.css'
import { BiColor, BiFontColor, BiFontSize } from 'react-icons/bi'
import { SiJordan } from 'react-icons/si'
import backg from '../../images/japan.jpg'
import JapanFlag from '../../images/japan-flag.avif'

function Home() {
  return (
    <div className='Home'>
     
<div className='hero'>

<div className='hero-img'>
  <img src={JapanFlag}></img>
</div>

<div className='hero-country-title'>
  <h3>Japan</h3>
</div>

<div className='hero-heading'>
  <h1>NEXT STOP AT</h1>
</div>

<div className='hero-country-title'>
  <h3>04 Apr 2025 - 06 Apr 2025
  </h3>
</div>

<div className='hero-btn'>
  <button>See more</button>
</div>




</div>

    </div>
  )
}

export default Home
