import { useContext } from 'react'
import {CounterContext} from '../App'
import CounterChange from './CounterChange'

function CounterHeader() {
  const { header } = useContext(CounterContext)
  return (
    <>
      <h2>{header}</h2>
      <CounterChange />
    </>
  )
}

export default CounterHeader