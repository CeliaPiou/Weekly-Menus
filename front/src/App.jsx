import { useState } from 'react'
import './App.css'
import Repas from './components/Repas'

function App() {

  const [days, setDays] = useState(["Lundi", "Mardi", "Mercredi", 
    "Jeudi", "Vendredi"])

  return (
    <>

    <h1>Weekly Menus</h1>

    <div className='container'>

      {days.map((day) => (
        <div className='day-div' id={day}>
          <h2>{day}</h2>

          <div className='color-day'>
            <h3>Midi:</h3>
            <Repas />
            <h3>Soir:</h3>
            <Repas />
          </div>

        </div>
      ))}

    </div>

    </>
  )
}

export default App
