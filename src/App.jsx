import './App.css'
import { Header } from './assets/components/sections/Header'
import { ACNHSection } from './assets/components/sections/ACNHSection'
import { PocketCampSection } from './assets/components/sections/PocketCampSection'
import { AmiiboSection } from './assets/components/sections/AmiiboSection'
import { CanelitaSection } from './assets/components/sections/CanelitaSection'
import { Footer } from './assets/components/sections/Footer'
import { LineFooter } from './assets/components/ui/LineFooter'


const App = () => {
  return (
    <div>
        <Header/>
        <main >
          <ACNHSection/>
          <PocketCampSection/>
          <AmiiboSection/>
          <CanelitaSection/>
          <LineFooter/>
          <Footer/>
        </main>
        
    </div>
  )
}

export default App;