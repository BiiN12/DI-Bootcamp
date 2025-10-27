import { useState } from 'react'
import './App.css'

function App() {
  const [languages, setLanguages] = useState([
                                            {name: "Php", votes: 0},
                                            {name: "Python", votes: 0},
                                            {name: "JavaSript", votes: 0},
                                            {name: "Java", votes: 0}
                                          ])

  const voteIncrement = (index) => {
    const newLanguages = [...languages]
    newLanguages[index].votes++
    setLanguages(newLanguages)
  }

  // console.log(languages[0].votes);

  return (
    <>
      <div>
        <h3>Vote Your Favorite Programming Language</h3>
        {languages.map((language, index) => (
          <div className="box" key={index}>
            <h4>{language.name}</h4>
            <p>{language.votes}</p>
            <button onClick={() => voteIncrement(index)}>Vote</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
