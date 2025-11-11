import { useState, createContext, useRef } from 'react'
import Counter from './components/Counter'
import Posts from './components/Posts'
import './App.css'

export const CounterContext = createContext()
export const PostsContext = createContext()

function App() {
  const [header, setHeader] = useState('')
  const [count, setCount] = useState(0)

  const ref = useRef(23)
  console.log(ref)
  ref.new = 12
  console.log(ref)

  return (
    <>
      <CounterContext value={{header, count, setCount, setHeader}}>
        <Counter />
      </CounterContext>
      <PostsContext value={{title: 'Post of the day'}}>
        <Posts />
      </PostsContext>
    </>
  )
}

export default App
