import { useCallback } from "react"
import { useState } from "react"
function App(){
    const [count,setCount] = useState(0)
    const Increment = useCallback(()=>{
        setCount(count+1)
    })
    const Decrement = useCallback(()=>{
        setCount(count-1)
    })
    return <>
        <button onClick={Increment}>+</button>
        <span>{count}</span>
        <button onClick={Decrement}>-</button>
    </>
}
export default App;
