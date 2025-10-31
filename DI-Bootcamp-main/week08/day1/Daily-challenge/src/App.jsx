import { useState } from 'react'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [destination, setDestination] = useState('');
  const [nuts, setNuts] = useState(false);
  const [lactose, setLactose] = useState(false);
  const [vegan, setVegan] = useState(false);

  return (
    <>
      <h1>Sample Form</h1>
      <div>
        <form>
        <input type="text" placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} /><br />
        <input type="text" placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} /><br />
        <input type="number" placeholder='Age' onChange={(e) => setAge(e.target.value)} /><br /><br />

        <input type='radio' name='gender' value='male' onChange={(e) => setGender(e.target.value)}/> Male
        <input type='radio' name='gender' value='female' onChange={(e) => setGender(e.target.value)}/> Female

        <br /><br />
        <select onChange={(e) => setDestination(e.target.value)}>
          <option value=''>Select a destination</option>
          <option value='london'>London</option>
          <option value='paris'>Paris</option>
          <option value='new-york'>New York</option>
        </select><br /><br />
        <input type='checkbox' name='allergies' value='nuts' onChange={(e) => setNuts(e.target.checked)}/> Nuts
        <input type='checkbox' name='allergies' value='lactose' onChange={(e) => setLactose(e.target.checked)}/> Lactose
        <input type='checkbox' name='allergies' value='vegan' onChange={(e) => setVegan(e.target.checked)}/> Vegan
      </form>
      </div>
      
      <div>
        <h3>Entered information:</h3>
        <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>Destination: {destination}</p>
      <p>Allergies: </p>
      <ul>
        <li>Nuts: {nuts ? 'Yes' : 'No'}</li>
        <li>Lactose: {lactose ? 'Yes' : 'No'}</li>
        <li>Vegan: {vegan ? 'Yes' : 'No'}</li>
      </ul>
      </div>
    </>
  )
}

export default App
