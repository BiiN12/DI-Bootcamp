import { useState } from 'react'
import Garage from './Garage.jsx'

const Car = (props) => {
    const [color, setColor] = useState("red")
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>This car is {color} {props.model}</h3>
            <Garage size="big"/>
        </div>
    )
}

export default Car