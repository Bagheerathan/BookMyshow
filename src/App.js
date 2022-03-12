import {Route ,Routes} from "react-router-dom";

//HOC
import DefautltHOC from "./HOC/Default.HOC";


//Components
import Temp from "./Component/temp";
import Homepage from "./Component/Pages/Hom.page";

function App() {
  return (
    <>
      <DefautltHOC path="/" exact component ={Homepage}/>
    </>
  );
}

export default App;
