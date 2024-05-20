import { useSetRecoilState } from "recoil";
import Component from "./Component";
import { CountAtom } from "../source/atoms/count";
export default function ButtonFile(){
    const setCount = useSetRecoilState(CountAtom)
    return <>
        <button onClick={()=>setCount(count=>count+1)}>
            <Component/>
        </button>
    </>
}
