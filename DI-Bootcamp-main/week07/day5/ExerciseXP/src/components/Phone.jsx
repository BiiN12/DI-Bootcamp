import { useState } from 'react'

const Phone = () => {
    const [phone, setPhone] = useState({
        brand: "Samsung",
        model: "Galaxy S20",
        color: "black",
        year: 2020
    })

    const changeColor = () => {
        setPhone({...phone, color: "blue"})
    }

    return (
        <div style={{border: "1px solid #fff", marginTop: "20px"}}>
            <h1>My phone is a {phone.brand}</h1>
            <p>It is a {phone.color} {phone.model} from {phone.year}</p>
            <button onClick={changeColor}>Change color</button>
        </div>
    )
}

export default Phone