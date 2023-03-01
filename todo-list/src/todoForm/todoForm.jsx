import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';

const TodoForm = (props) => {
    const [todoItem, setTodoItem] = useState('');
   
    const handleChange = (e) => {
        setTodoItem(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        props.onSubmit({
            id: new Date().getTime().toString(36) + new Date().getUTCMilliseconds(),
            text: todoItem,
        });
        // if (todoItem) {
        //     let uniqueId = new Date().getTime().toString(36) + new Date().getUTCMilliseconds();
        //     let newTodoItem = {
        //         id: uniqueId,
        //         todo: todoItem,
        //         complete: false,
        //     };
        //     setTodos([newTodoItem, ...todos]);
        //     setTodoItem('');
        // } else {
        //     setTodoItem('');
        // }
        setTodoItem('');
    };

    

    return (
        <div className='textfield'>
            <Box 
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
            >
                {/* <TextField fullWidth label="Add Todo..." id="fullWidth" /> */}
                <FormControl onSubmit={handleSubmit}>                   
                    <OutlinedInput
                        fullWidth
                        id="fullWidth" 
                        value={todoItem}
                        label="Add Todo..."
                        onChange={handleChange}
                        placeholder="Add Todo..."
                    />
                </FormControl>
                     
                  <Button style={props.theme} color="secondary" onClick={handleSubmit}>Submit</Button>
                
            </Box>
        </div>
        
    );
}

export default TodoForm;
