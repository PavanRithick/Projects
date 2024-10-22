import { useState,useEffect } from "react";
export default function Counter(){
    let[count,setCount]=useState(0);
    let inc=()=>{
        setCount(count+1);
    }
    useEffect(
        function somet(){
            console.log("hi");
        },
        []//using this only prints hi for only 1st render
      //  [inc] writing something will print hi as many times the method inc is re-rendered
    )
    return(
        <div>
            <p>Count:{count}</p>
            <button onClick={inc}>+1</button>
        </div>
    )
}