import { useContext } from "react"
import { CounterContext } from "../Context/CounterContext"

export default function Component(){
    const value = useContext(CounterContext)
    return <>
       {value.count}
    </>
}