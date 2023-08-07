import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState,useEffect } from "react";
import { MdDeleteOutline,MdOutlineAddTask } from "react-icons/md";
import View from "./View";

const getDataFromLS=()=>{
  const data=localStorage.getItem('todos')
  if(data){
    return JSON.parse(data);
  }
  else{
    return [];
  }
}
const Todo = () => {
  const [todos,setTodos]=useState(getDataFromLS());
  const [title,setTitle] = useState('')
  const [desc,setDesc] = useState('')
// Form Submit Event
  const handleAddTodoSubmit=(e)=>{
    e.preventDefault();
//Creating an object
    let todo={
      title,
      desc
    }
    setTodos([...todos,todo]);
    setTitle('');
    setDesc('')
  }
useEffect(()=>{
  localStorage.setItem('todos',JSON.stringify(todos))
},[todos])

const deleteTodo=(id)=>{
  console.log(id)
  const filteredTodos=todos.filter((element,index)=>{
    return index!== id;
  })
  setTodos(filteredTodos)
}

  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-11 add">
          <h2 className="text-center"><u>Add New Task</u></h2>
          <div className="add-todo">
            <form onSubmit={handleAddTodoSubmit} >
                <label className="form-lable" >Title*</label>
                <input type="text" className="form-control" placeholder="Title" required onChange={(e)=>setTitle(e.target.value)} value={title} />
  
                <label className="form-lable" >Description</label>
                <input type="text" className="form-control" placeholder="Description" onChange={(e)=>setDesc(e.target.value)} value={desc} />
              <Button variant="success" type="submit" className="btn add-btn">
                 <MdOutlineAddTask className="icon add-icon"/>
              </Button>
            </form>
          </div>
        </div>
        <div className="row display">
          <h2 className="text-center"><u>Todos</u></h2>
            {todos.length>0 &&
             <View todos={todos} deleteTodo={deleteTodo} />}
         
            {todos.length < 1 &&<div>No Tasks Added yet</div>}
          
        </div>
      </div>
    </div>
  );
};

export default Todo;
