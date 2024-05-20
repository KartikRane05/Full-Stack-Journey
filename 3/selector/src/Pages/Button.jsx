import { useRecoilState } from "recoil"
import { CountAtom } from "../Store/atoms/CountAtom"

export default function Button(){
    const [count,setCount] = useRecoilState(CountAtom)
    return <>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <br /><br />
        {count}
        <br /><br />
    </>
}