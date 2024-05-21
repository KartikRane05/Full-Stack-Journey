import { useState } from "react"
import { useRecoilState } from "recoil"
import { TodoAtom } from "../Store/atoms/AllAtoms"

export default function MainPage(){
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [todo,setTodo] = useRecoilState(TodoAtom)
    function BtnClick(){
        setTodo([...todo,{
            title:title,
            description:description,
            status:false
        }])
    }
    const TodoData = todo.map((element,index)=>(
        <div key={index} className="EachTodo">
            <h4>title:- {element.title}</h4>
            <h4>description:- {element.description}</h4>
            <button onClick={()=>{
                Operation({index})
            }}>{element.status == false ? "Mark As Done!!!" : "Done!!"}</button>
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
        <center>
            <input type="text" placeholder="Enter Title" onInput={(e)=>setTitle(e.target.value)}/>
            <br /><br />
            <input type="text" placeholder="Enter Description" onInput={(e)=>setDescription(e.target.value)}/>
            <br /><br />
            <button onClick={BtnClick}>AddTodo</button>
            <br /><br />
        </center>
        <div className="AllTodo">{TodoData}</div>
    </>
}