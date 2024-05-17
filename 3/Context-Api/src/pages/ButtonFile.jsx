import { useContext } from "react";
import Component from "./Component";
import { CounterContext } from "../Context/CounterContext";

export default function ButtonFile(){
    const value = useContext(CounterContext)
    return <>
        <button onClick={()=>{value.setCount(value.count+1)}}>{<Component/>}</button>
    </>
}