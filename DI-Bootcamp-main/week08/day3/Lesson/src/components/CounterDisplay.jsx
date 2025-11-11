import React from 'react'
import { useContext } from 'react'
import {CounterContext} from '../App'

function CounterDisplay() {
  const {count} = useContext(CounterContext)
  return (
    <h3>Count: {count}</h3>
  )
}

export default CounterDisplay