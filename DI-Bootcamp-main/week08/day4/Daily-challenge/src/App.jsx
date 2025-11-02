import { useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState()
  const [num2, setNum2] = useState()
  const [operator, setOperator] = useState("+")
  const [result, setResult] = useState()

  const handleClick = () => {
    if (operator === "+") {
      setResult(num1 + num2)
    } else if (operator === "-") {
      setResult(num1 - num2)
    } else if (operator === "*") {
      setResult(num1 * num2)
    } else if (operator === "/") {
      setResult(num1 / num2)
    }
  }

  return (
    <div className='box'>
     <h2>Calculator</h2>
     <div className="inputs">
      <input type="number" value={num1} onChange={(e) => setNum1(parseInt(e.target.value))} />
      <select onChange={(e) => setOperator(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" value={num2} onChange={(e) => setNum2(parseInt(e.target.value))} />
     </div>
     <button onClick={handleClick}>=</button>
     <h1>{result}</h1>
    </div>
  )
}

export default App
