import { useState } from 'react'
import './App.css'
import { Header } from './assets/components/sections/Header'
import { ACNHSecction } from './assets/components/sections/ACNHSecction'

const App = () => {


  return (
    <div>
        <Header/>
        <main>
          <ACNHSecction/>
        </main>
        
    </div>
  )
}

export default App;