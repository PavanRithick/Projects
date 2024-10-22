import { useState } from "react";
export default function Like(){
    let[isLike,setIsLike]=useState(false);
    let[click,setClick]=useState(0);
    let toggleLike=()=>{
        setIsLike(!isLike);
        setClick(click+1);
    }
    let styles={color:"red"};
    return(
        <div>
            <p>Clicks:{click}</p>
            <p onClick={toggleLike}>
                {
                    isLike?(
                        <i className="fa-solid fa-heart" style={styles}></i>
                    ) :(
                        <i className="fa-regular fa-heart"></i>
                    )
                }
                
            </p>
        </div>
    );
}