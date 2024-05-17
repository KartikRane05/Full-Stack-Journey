import { useState } from "react";
import NavBar from "./pages/NavBar";
import { CounterContext } from "./Context/CounterContext";
function App(){
  const [count,setCount] = useState(0);
  return <>
  <CounterContext.Provider value={{count,setCount}}>
    <NavBar/>
  </CounterContext.Provider>
  </>
}
export default App;
