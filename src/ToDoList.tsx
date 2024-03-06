import './App.css';
import { ToDo } from './model';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { SingleToDo } from './SingleToDo';



interface Props {
    tasks: ToDo[];
    setTasks: React.Dispatch<React.SetStateAction<ToDo[]>>
}


export const ToDoList = ({tasks, setTasks }: Props) => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2.5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

  

    return (
        <div className='taskL'>
            <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {tasks.map((myTask)=>{
                    return(
                        <Grid item xs={12} sm={6} md={6}  >
                            <Item style={{backgroundColor: myTask.isDone ? "lightgreen" : "white"}}>
                            <SingleToDo myTask={myTask} key={myTask.id} setTasks={setTasks} tasks={tasks}/>
                            </Item>
                        </Grid>           
                    )
                })}  
            </Grid>
            </Box> 
        </div>
    )
}
 