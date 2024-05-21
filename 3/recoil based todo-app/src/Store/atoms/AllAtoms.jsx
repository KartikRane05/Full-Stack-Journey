import { atom, selector } from "recoil";
export const TodoAtom = atom({
    key:"TodoAtom",
    default:[]
})
export const TitleAtom = atom({
    key:"TitleAtom",
    default:""
})

export const DescAtom = atom({
    key:"DescAtom",
    default:""
})

export const FilterAtom = atom({
    key:"FilterAtom",
    default:""
})

export const FilterThings = selector({
    key:"FilterThings",
    get:({get})=>{
        const filter = get(FilterAtom)
        const todo = get(TodoAtom)
        return todo.filter((x)=> x.title.includes(filter) || x.description.includes(filter))
    }
})