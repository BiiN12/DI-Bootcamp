import { useState } from 'react'
import Users from './components/Users.jsx'
import Counter from './components/Counter.jsx'
import data from './assets/users.json'
import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Counter />
      {/* {
        data.map((user) => (
          <Users key={user.id} name={user.name} email={user.email} />
        ))
      } */}
    </>
  )
}

export default App
