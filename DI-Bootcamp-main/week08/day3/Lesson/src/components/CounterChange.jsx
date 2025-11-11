import { useContext } from "react";
import { CounterContext } from "../App";

function CounterChange() {
    const {setHeader} = useContext(CounterContext)
    return (
        <input type="text" onChange={(e) => setHeader(e.target.value)}/>
    )
}

export default CounterChange