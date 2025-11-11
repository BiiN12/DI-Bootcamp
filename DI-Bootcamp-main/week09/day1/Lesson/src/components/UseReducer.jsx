import { useState, useReducer, useRef } from 'react'

const reducer = (state, action) => {
  // console.log("state =>", state);
  // console.log("action =>", action);

  if (action.type === "increment") {
    return {
      count: state.count + 1
    }
  } else if (action.type === "decrement") {
    return {
      count: state.count - 1
    }
  }
  else if (action.type === "incrementByNumber") {
    return {
      count: state.count + Number(action.payload)
    }
  }
}

function UseReducer() {
      const [count, setCount] = useState(0)
  const [count2, setCount2] = useReducer(reducer, { count: 5 })
  const inputRef = useRef()
  return (
    <>
        <div className="card">
        <h3>useState and useReducer</h3>
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount2({ type: "increment" })}>
          count2 is {count2.count}
        </button>
        <button onClick={() => setCount2({ type: "decrement" })}>
          count2 is {count2.count}
        </button>
        <br />
        <div>
          <input type="number" ref={inputRef}/>
          <button onClick={() => setCount2({ type: "incrementByNumber", payload: inputRef.current.value })}>Add</button>
        </div>
      </div>
    </>
  )
}

export default UseReducer