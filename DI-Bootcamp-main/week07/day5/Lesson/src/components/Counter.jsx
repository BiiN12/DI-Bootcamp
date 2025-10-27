import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count => count + 1);
        console.log(count);
    }
    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
        </>
    )
}
export default Counter