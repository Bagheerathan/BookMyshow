import {Route ,Routes} from "react-router-dom";

//HOC
import DefautltHOC from "./HOC/Default.HOC";


//Components
import Temp from "./Component/temp";

function App() {
  return (
    <>
      <DefautltHOC path="/" exact component ={Temp}/>
    </>
  );
}

export default App;
