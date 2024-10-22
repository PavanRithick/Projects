import { useState} from "react";
import { v4 as uuidv4 } from 'uuid';
export default function Todo(){
    let[tasks,setTasks]=useState([{task:"sample",id:uuidv4,isDone:false}]);
    let[newtask,setNewtask]=useState("");
    let addNewTask=()=>{
        setTasks([...tasks,{task:newtask,id:uuidv4(),isDone:false}]);
        setNewtask("");
    };
    let updateNew=(event)=>{
        setNewtask(event.target.value)
    };
    let deletetask=(id)=>{
        setTasks(tasks.filter((todo) => todo.id!=id));
    }
    let allUpper = () => {
        setTasks(
            tasks.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            })
        );
    };
    let upper=(id)=>{
        setTasks(
            tasks.map((todo) => {
                if(todo.id==id)
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
                else{
                    return todo;
                };
            })
        );
    }
    let done=(id)=>{
        setTasks(
            tasks.map((todo) => {
                if(todo.id==id)
                return {
                    ...todo,
                    isDone:true
                };
            })
        );
    }
 return(
        <div>
            <input 
            placeholder="Todo tasks"
            value={newtask}
            onChange={updateNew}
            ></input>
            <br></br>
            <button onClick={addNewTask}>Add</button>
            <br></br>
            <br></br>
            <h4>Tasks</h4>
            <ul>
                {
                 tasks.map((todo) => (
                      <li key={todo.id}>
                         <span style={todo.isDone ? {textDecoration:"line-through"}:{}}>{todo.task}</span>
                         <button onClick={()=>deletetask(todo.id)}>Delete</button>
                         <button onClick={()=>upper(todo.id)}>Upper</button>
                         <button onClick={()=>done(todo.id)}>Done</button>
                     </li>
                 ))}
            </ul>
            <button onClick={allUpper}>Upper case</button>
        </div>
    );
}