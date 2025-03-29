import { useState } from 'react'
import { NavLogin } from './assets/components/NavLogin'
import { ButtonAnimation } from './assets/components/ButtonAnimation'
import { BannerHeader } from './assets/components/BannerHeader'
import './App.css'


const App = () => {


  return (
    <div>
        <NavLogin />
        <ButtonAnimation />
        <BannerHeader />
        
    </div>
  )
}

export default App;