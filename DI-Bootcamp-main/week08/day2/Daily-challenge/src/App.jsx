import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [header, setHeader] = useState("")
  const [post, setPost] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      setError(null)
      const response = await fetch("http://localhost:3000/api/hello")
      
      if (!response.ok) {
        throw new Error('Failed to fetch header')
      }
      
      const data = await response.json()
      setHeader(data.message)
    } catch (err) {
      setError(err.message)
      console.error('Error fetching data:', err)
    }
  }

 useEffect(() => {
    fetchData()
  }, [])

   const fetchPost = async (e) => {
    e.preventDefault()
    
    if (!message.trim()) return alert("Please enter a message")
    
    try {
      setError(null)
      
      const res = await fetch("http://localhost:3000/api/world", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post: message,
        }),
      })

      if (!res.ok) {
        throw new Error('Failed to submit post')
      }

      const data = await res.json()
      setPost(data.message)
      setMessage("") // Clear input after successful submission
    } catch (err) {
      setError(err.message)
      console.error('Error posting data:', err)
    }
  }

  return (
    <>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <h1>{header}</h1>
      
      <form onSubmit={fetchPost}>
        <input 
          type="text" 
          name="post" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message"
        />
        <button type="submit" disabled={!message.trim()}>
          Send
        </button>
      </form>
      
      {post && <h3>{post}</h3>}
    </>
  )
}

export default App
