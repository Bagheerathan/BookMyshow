import {Route ,Routes} from "react-router-dom";
import axios from "axios";

//HOC
import DefautltHOC from "./HOC/Default.HOC";
import MovieltHOC from "./HOC/Movie.Hoc";


//pages
import Temp from "./Component/temp";
import Homepage from "./Component/Pages/Hom.page";
import Movie from "./Component/Pages/Movie.page";


//axios setteings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefautltHOC path="/" exact component ={Homepage}/>
      <MovieltHOC path="/Movies" exact component ={Movie}/>
    </>
  );
}

export default App;
