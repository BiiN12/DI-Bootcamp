import { useState } from 'react'
import Parent from './components/Parent'
import Child from './components/Child'
import Counter from './components/Counter'
import ErrorBoundary from './helper/ErrorBoundary'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import { Routes, Route, Link } from "react-router"
import './App.css'

function App() {

  return (
    <>
      <header>
        <nav>
          <Link to="/">Home | </Link>
          <Link to="/about">About | </Link>
          <Link to="/shop">Shop</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path='*' element={<h2>404 page not found</h2>} />
      </Routes>



      {/* <h1>Vite + React</h1>
      <ErrorBoundary>
      <Counter/>
      </ErrorBoundary>
      <Parent admin="john">
        <h2>Children / Error Boundary / Routering </h2>
        <Child/>
      </Parent> */}
    </>
  )
}

export default App
