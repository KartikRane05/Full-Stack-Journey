import { atom, selector } from "recoil";
export const CountAtom = atom({
    key:"CountAtom",
    default:0
})

export const EvenSelector = selector({
    key:"EvenSelector",
    get:({get})=>{
        const count = get(CountAtom);
        return count%2
    }
})