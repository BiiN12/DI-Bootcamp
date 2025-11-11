import React from 'react'
import { useContext } from 'react'
import {CounterContext} from '../App'

function CounterButton() {
  const {setCount} = useContext(CounterContext)

    const countIncrement = () => {
        setCount(prevCount => prevCount + 1)
    }
  return (
    <button onClick={countIncrement}> + </button>
  )
}

export default CounterButton