import { useState } from 'react'
import './App.css'
import { Header } from './assets/components/sections/Header'
import { ACNHSection } from './assets/components/sections/ACNHSection'
import { PocketCampSection } from './assets/components/sections/PocketCampSection'
import { AmiiboSection } from './assets/components/sections/AmiiboSection'
const App = () => {


  return (
    <div>
        <Header/>
        <main>
          <ACNHSection/>
          <PocketCampSection/>
          <AmiiboSection/>
        </main>
        
    </div>
  )
}

export default App;