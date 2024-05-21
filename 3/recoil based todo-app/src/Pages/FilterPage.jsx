import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { FilterAtom, FilterThings, TodoAtom } from "../Store/atoms/AllAtoms"
export default function FilterPage(){
    const [todo,setTodo] = useRecoilState(TodoAtom)
    const setFilter = useSetRecoilState(FilterAtom)
    const filterData = useRecoilValue(FilterThings)
    const FilterShowData = filterData.map((element,index)=>(
        <div key={index} className="EachTodo">
            <h4>title:- {element.title}</h4>
            <h4>description:- {element.description}</h4>
            <button onClick={()=>{
                Operation({index})
            }}>{element.status == false ? "Mark As Done!!" : "Done!!!"}</button>
        </div>
    ))
    function Operation({index}){
        const arr = [...todo]
        arr[index] = {...todo[index],
            status:true
        }
        setTodo(arr)
    }
    return <>
        <input type="text" placeholder="Enter Search" onChange={(e)=>setFilter(e.target.value)}/>
        <br /><br />
        <div className="AllTodo">{FilterShowData}</div>
    </>
}