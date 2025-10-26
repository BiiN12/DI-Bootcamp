import './App.css'
import Hello  from './Hello'
import User from './components/User'
import users from './users.json'

// const users = [
//   { id: 1, name: "Leanne Graham", username: "Bret", email: "F4TbM@example.com" },
//   { id: 2, name: "Ervin Howell", username: "Antonette", email: "NfHb2@example.com" },
//   { id: 3, name: "Clementine Bauch", username: "Samantha", email: "NfHb2@example.com" }
// ]

function App() {
  return (
    <>
      <h1>Welcome to ReactJS</h1>
      {/* <Hello /> */}
      {/* <User name={users[0].name} username={users[0].username} email={users[0].email}/>
      <User name={users[1].name} username={users[1].username} email={users[1].email}/>
      <User name={users[2].name} username={users[2].username} email={users[2].email}/> */}
      {users.map((user) => (
        <User key={user.id} name={user.name} username={user.username} email={user.email} />
      ))}
    </>
  )
}

export default App
