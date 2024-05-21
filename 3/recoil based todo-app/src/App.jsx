import FilterPage from "./Pages/FilterPage";
import MainPage from "./Pages/MainPage";
import { RecoilRoot } from "recoil";
function App(){
    return <>
    <RecoilRoot>
      <MainPage/>
      <hr />
      <FilterPage/>
    </RecoilRoot>  
    </>
}
export default App;
