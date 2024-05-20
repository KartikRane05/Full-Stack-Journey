import { useRecoilValue } from "recoil"
import { EvenSelector } from "../Store/atoms/CountAtom"

export default function Even(){
   const IsEven = useRecoilValue(EvenSelector) 
    return <>
        <div>{IsEven ==0 ? "Even Number" : "Odd Number"}</div>
    </>
}