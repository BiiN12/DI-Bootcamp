import { useState, useReducer, useRef } from 'react'
import UseReducer from './components/UseReducer'
import ReduxCounter from './components/ReduxCounter'
import './App.css'



function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <UseReducer />
      <ReduxCounter />
    </>
  )
}

export default App
