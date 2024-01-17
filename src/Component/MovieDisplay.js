import React from "react";





const MovieDisplay =({fullData})=>{



    return(
        <div >
                {
                    fullData ?(
                        <div className="secondDiv">
                        <h1>Movies Details</h1>
                        <img src={fullData.banner}  alt={fullData.title} />
                        <p>{fullData.title}</p>
                        <p>{fullData.actor}</p>
                        <p>{fullData.genre}</p>
                        <p>{fullData.director}</p>
                        </div>
                    ):""
                }
                
        </div>
    )
}


export default MovieDisplay