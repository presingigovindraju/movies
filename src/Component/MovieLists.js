import React from "react";
import MovieNames from "../Data/MovieNames"


const MoviesList =({setObjects})=>{


    return (
        <div className="mainDiv">
            <div className="firstDiv">
               { 
                 MovieNames.map((item,index)=>
                    <p onClick={()=>setObjects(item)} key={index}>{item.title}</p>
                 )
               }
            </div>
        </div>
    )
}

export default MoviesList