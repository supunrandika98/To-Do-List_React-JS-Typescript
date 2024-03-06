import { useState } from 'react';
import './App.css';
import { InputField } from './InputField.tsx';
import { ToDo } from './model.ts';
import { ToDoList } from './ToDoList.tsx';
 

function App() {
  
  const [todo, setToDo] = useState<string>("");
  const [tasks, setTasks] = useState<ToDo[]>([]);

  const handleAdd = ()=>{

    if(todo){
      setTasks([...tasks, {id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1, task: todo, isDone: false }])
      setToDo("");
    }
    
  }
   
   
  return (
    <div className='App'>
      <h1 style={{fontFamily: 'cursive', fontSize: '2.4rem'}}>Taskify App</h1>
      <InputField todo={todo} setToDo={setToDo} handleAdd={handleAdd}/>

      <ToDoList tasks={tasks} setTasks={setTasks}/>

    </div>
  )
}

export default App
