import UserFavoriteAnimals from './components/UserFavoriteAnimals';
import Exercise from './components/Exercise3';
import './App.css'

const myElement = <h1>I love JSX!</h1>
const sum = 5 + 5;

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};
function App() {

  return (
    <>
      {myElement}
      <h2>React is {sum} times better with JSX</h2>
      <p>Hello World!</p>

      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
      <Exercise />
    </>
  )
}

export default App
