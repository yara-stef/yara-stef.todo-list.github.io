import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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
        setTodoItem('');
    };

    

    return (
        <div className='textfield'>                                          
            <Box
              sx={{
                width: 500,
                maxWidth: '100%',
                }}
                 onSubmit={handleSubmit}
            >
                <TextField fullWidth label="Add Todo..." id="fullWidth" value={todoItem} onChange={handleChange} />
                
            </Box>  
            <Box>
                <Button
                sx={{
                    color: '#212121',
                    }}
                onClick={handleSubmit}>Submit</Button>
            </Box>
        </div>        
    );
}

export default TodoForm;
