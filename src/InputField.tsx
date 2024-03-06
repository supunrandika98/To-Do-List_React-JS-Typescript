import React from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


interface Props {
    todo: string;
    setToDo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: () => void;
}


export const InputField = ({ todo, setToDo, handleAdd }: Props) => {

    return (
        <div className='taskInputs'>

           <TextField className="textinput"   id="outlined-basic" label="Enter a Task" variant="outlined"  onChange={ (e)=>{
            setToDo(e.target.value)
           }}/>
           <Button className="btninput" variant="contained" size="medium" endIcon={<SendIcon />} onClick={handleAdd}> ADD</Button>

         
        </div>
    )
}
