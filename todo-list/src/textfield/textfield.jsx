import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Textfield = (props) => {
    const theme = createTheme({
        palette: {    
            secondary: {
            main: '#black',
            },
        },
    });
    return (
        <div className='textfield'>
            <Box 
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
            >
                {/* <TextField fullWidth label="Add Todo..." id="fullWidth" /> */}
                <FormControl>                   
                    <OutlinedInput
                        fullWidth
                        id="fullWidth" 
                        value={props.todoItem}
                        label="Add Todo..."
                        onChange={props.changeText}
                        placeholder="Add Todo..."
                    />
                </FormControl>
                <ThemeProvider theme={theme}>      
                  <Button color="secondary" onClick={props.submit}>Submit</Button>
                </ThemeProvider>
            </Box>
        </div>
        
    );
}

export default Textfield;
