import { useState  } from "react";

export default function Counter () {
    const [count, setCount] = useState(0)

    if (count > 5) throw new Error("Something went wrong!")
    return (
        <div>
            <button onClick={() => setCount(count+1)}>Count: {count}</button>
        </div>
    )
}