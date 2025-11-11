import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../redux/action'

function ReduxCounter() {
    const count = useSelector(state => state.counterReducer.count)
    const dispatch = useDispatch()
  return (
    <>
        <h2>Count: {count}</h2>
        <button onClick={() => dispatch(increment())}> + </button>
    </>
  )
}

export default ReduxCounter