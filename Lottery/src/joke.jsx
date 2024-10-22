import { useState } from "react";

export default function Joke(){
    let[joke,setJoke]=useState({});
    const URL="https://official-joke-api.appspot.com/random_joke";
    
    const rand=async()=>{
        let response=await fetch(URL);
        let jsonres=await response.json();
        console.log(jsonres);
        setJoke({setup:jsonres.setup,punchline:jsonres.punchline});
    }

    return (
        <div>
            <h3>Joke</h3>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
            <button onClick={rand}>New joke</button>
        </div>
    )
}