import { useState, useEffect } from 'react'
import quotesDatabase from './models/quotesDatabase'
import './App.css'

function App() {
  const [quotes, setQuotes] = useState('')
  const [bg, setBg] = useState("#ffffff");
  const styles = {
     color: bg,
     animation: "slideIn 1s ease-out forwards"
  }

  const generateQuote = () => {
    const index = Math.floor(Math.random() * quotesDatabase.length)
    const quote = quotesDatabase[index]

    if (quote === quotes) {
      return generateQuote()
    }

    return quote
  }

  const handleClick = () => {
    const newQuote = generateQuote()

    setQuotes(newQuote)
    setBg(randomColor())
  }

  const randomColor = () =>
    "#" + Math.floor(Math.random() * 0xffffff)
           .toString(16)
           .padStart(6, "0");

  useEffect(() => {
    const newQuote = generateQuote()
    setQuotes(newQuote)
    setBg(randomColor())

  }, [])

    useEffect(() => {
    document.getElementById("root").style.backgroundColor = bg
  }, [bg]);

  return (
    <>
      <div className="box">
        <div key={quotes.quote} style={styles}>
          <h1>"{quotes.quote}"</h1>
          <p>- {quotes.author || "Unknown"}</p>
        </div>
        <button style={{ backgroundColor: bg, animation: "fadeIn .9s ease-out forwards" }} onClick={handleClick}>New Quote</button>
      </div>
    
    </>
  )
}

export default App
