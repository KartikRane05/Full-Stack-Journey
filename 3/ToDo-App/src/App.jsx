import { useCallback } from "react"
import { useState } from "react"
function App(){
  const [todo,setTodo] = useState([])
  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")
  const ToDoData = todo.map((element,index)=>(
    <div key={index}>
      <h4>{element.title}</h4>
      <h4>{element.description}</h4>
      <button onClick={()=>{
        const arr = [...todo]
        arr[index].status = true
        setTodo(arr)
      }}>{element.status == false ? "Mark As Done!!" : "Done!!"}</button>
    </div>
  ))
  const AddTodo = useCallback(()=>{
      const ToWork = [...todo]
      ToWork.push({
        title:title,
        description:desc,
        status:false
      })
      setTodo(ToWork)
  },[title,desc])
  return <>
    <center>
      <div>
        <h1>ToDo-App</h1>
        <input type="text" placeholder="Enter Title" onInput={(e)=>setTitle(e.target.value)}/>
        <br /><br />
        <input type="text" placeholder="Enter Description" onInput={(e)=>setDesc(e.target.value)}/>
        <br /><br />
        <button onClick={AddTodo}>Add ToDo</button>
        <br /><br />
      </div>
    </center>
    <div style={{display:"flex"}}>{ToDoData}</div>
  </>
}
export default App;
