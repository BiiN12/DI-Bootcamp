import { useState } from 'react'
import PostsList from './features/posts/PostsList'
import UsersBox from './features/users/UsersBox'
import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <UsersBox />
      <PostsList />
    </>
  )
}

export default App
