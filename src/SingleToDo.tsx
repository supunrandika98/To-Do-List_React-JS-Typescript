import React, { useState } from 'react';
import { ToDo } from './model';
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md"; 
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';



interface Props{
    myTask: ToDo;
    key: number;
    tasks: ToDo[];
    setTasks: React.Dispatch<React.SetStateAction<ToDo[]>>
}


export const SingleToDo = ({myTask, tasks, setTasks}: Props) => {


    const handleDone = (id:number) =>{
        setTasks(tasks.map((todo)=> todo.id === id ? {...todo, isDone: !todo.isDone} : todo))
    }

    const handleDelete = (id:number) =>{
        setTasks(tasks.filter((todo)=> {
            if(todo.id === id){
                return false;
            }
            else{
                return true;
            }
        }))
    }

    const [edit, setEdit] = useState<boolean>(false);
    const [editToDo, setEditToDo] = useState<string>(myTask.task);

    const handleSubmit = (e:any, editKey: number) =>{
        e.preventDefault();
        setTasks(tasks.map((todo)=> (todo.id === editKey ? {...todo, task:editToDo}: todo) ));
        setEdit(false);
    }

   
    return (
        <form onSubmit={(e)=> handleSubmit(e,myTask.id)} className='singleTaskList' >
            <div  className='taskList'>
                
                    { edit ?  
                    <React.Fragment>
                        <input value={editToDo} onChange={(e)=>setEditToDo(e.target.value)}/>
                        <Stack sx={{ width: '50%' }}  style={{height: '4px'}} >
                            <Alert severity="warning">Press enter key after edit.</Alert>
                        </Stack>
                    </React.Fragment> :
                    <span className='taskItem'>{myTask.task}</span>
                    }
                    <div className='icons'>

                        <span className='icon' onClick={()=>{
                            if(!edit && !myTask.isDone){
                                setEdit(!edit);
                            }
                        }}><RiEdit2Fill/></span>

                        <span className='icon' onClick={()=> handleDelete(myTask.id)}><MdDelete /></span>

                        <span className='icon' onClick={()=> handleDone(myTask.id)}><MdDone/></span>

                    </div>
            </div>                                                   
        </form>
    )
}

