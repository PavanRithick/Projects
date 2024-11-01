import './CSS/TodoItems.css'
import image from './assets/image.png'
import not from './assets/not.png'
import cross from './assets/cross.png'

const TodoItems = ({ no, display, text,setTodos }) => {

    const delet=(no)=>{
        let data=JSON.parse(localStorage.getItem("todos"))
        data=data.filter((todo)=>
          todo.no!==no
        )
        setTodos(data)
    }

const tgl=(no)=>{
    let data=JSON.parse(localStorage.getItem("todos"))
    for(let i=0;i<data.length;i++){
        if(data[i].no===no){
            if(data[i].display===""){
                data[i].display="line-through"
            }
            else{
                data[i].display=""
            }
            break;
        }
    }
    setTodos(data)
}

  return (
    <div className='todoitems'>
      <div className={`contentContainer ${display}`} onClick={()=>{
        tgl(no)
      }}>
        {display===""?<img src={not} alt="not" className="icon button-style" />:<img src={image} alt="image" className="icon button-style" />}
   
        <div className="itemtext">{text}</div>
      </div>
      <img onClick={()=>{
        delet(no)
      }} className="crossi" src={cross} alt="cross" />
    </div>
  )
}

export default TodoItems;
