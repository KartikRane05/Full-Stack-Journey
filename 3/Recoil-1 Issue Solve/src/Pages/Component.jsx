import { useRecoilValue } from "recoil"
import { CountAtom } from "../source/atoms/count"

export default function Component(){
    const count = useRecoilValue(CountAtom)
return <>
        <div>{count}</div>
    </>
}