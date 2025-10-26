import './Exercise.css'

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

const Exercise = () => {
    return (
        <div>
            <h1 style={style_header}>React Day 1</h1>
            <p className='para'>Click <a href="#">here</a> to learn more</p>
            <form >
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" />
                <input type="submit" value="Submit" />
            </form>
            <img src="../assets/react.svg" alt="" />
            <ul>
                <li>First Item</li>
                <li>Second Item</li>
                <li>Third Item</li>
            </ul>
        </div>
    )
}


export default Exercise