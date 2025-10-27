import { useState  } from "react"

const Events = () => {
    const [clicked, setClicked] = useState(false)
    
    const ClickMe = () => alert("I was clicked!")

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            alert(`The Enter key was pressed, you entered: ${e.target.value}`)
            e.target.value = ""
        }

    }

    return (
        <>
        <button onClick={ClickMe}>Click Me</button>
        <input type="text" onKeyDown={handleKeyDown}/>
        <button onClick={() => setClicked(!clicked)}>{clicked ? "ON" : "OFF"}</button>
        </>
    )
}

export default Events