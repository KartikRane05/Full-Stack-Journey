import { RecoilRoot } from "recoil";
import Button  from "./Pages/Button";
import Even from "./Pages/Even";
function App(){
  return <>
    <center>
    <RecoilRoot>
    <Button/>
    <Even/>
    </RecoilRoot>
    </center>
  </>
}
export default App
