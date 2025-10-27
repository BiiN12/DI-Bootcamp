import { useState } from 'react'
import Car from './components/Car.jsx'
import ClickMe from './components/Events.jsx';
import Phone from './components/Phone.jsx';
import './App.css'

function App() {
  const carInfo = {name: "Ford", model: "Mustang"};
  return (
    <>
      <Car name={carInfo.name} model={carInfo.model}/>
      <ClickMe />
      <Phone />
    </>
  )
}

export default App
