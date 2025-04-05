import { useState } from 'react'
import './App.css'
import { Header } from './assets/components/sections/Header'
import { ACNHSection } from './assets/components/sections/ACNHSection'
import { PocketCampSection } from './assets/components/sections/PocketCampSection'
const App = () => {


  return (
    <div>
        <Header/>
        <main>
          <ACNHSection/>
          <PocketCampSection/>
        </main>
        
    </div>
  )
}

export default App;