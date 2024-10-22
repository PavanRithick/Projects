import { useState } from "react";
export default function Ludobrd(){
    let [moves,setMoves]=useState({yellow:0,red:0,blue:0,green:0});
    let moveblu=()=>{
        moves.blue+=1;
        setMoves({...moves});
    }
    let movered=()=>{
        moves.red+=1;
        setMoves({...moves});
    }
    let movegreen=()=>{
        moves.green+=1;
        setMoves({...moves});
    }
    let moveyellow=()=>{
        moves.yellow+=1;
        setMoves({...moves});
    }
    return(
        <div className="Ludo">
            <p>Blue:{moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={moveblu}>+1</button>
            <p>Red:{moves.red}</p>
            <button style={{backgroundColor:"red"}}>+1</button>
            <p>Yellow:{moves.yellow}</p>
            <button style={{backgroundColor:"yellow"}}>+1</button>
            <p>Green:{moves.green}</p>
            <button style={{backgroundColor:"green"}}>+1</button>
        </div>
    );
}