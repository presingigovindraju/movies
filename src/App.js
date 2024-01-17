import React,{useState} from "react";
import MoviesList from "./Component/MovieLists";
import MovieDisplay from "./Component/MovieDisplay";


const App =()=>{
    
    const [objects,setObjects] = useState("")


    return(
        <div className="pakkana">
            <MoviesList setObjects={setObjects}/>
            <MovieDisplay  fullData={objects}/>
        </div>
    )
}

export default App