import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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
                <TextField fullWidth label="Add Todo..." id="fullWidth"  />
                <ThemeProvider theme={theme}>      
                  <Button color="secondary" onClick={props.submit}>Submit</Button>
                </ThemeProvider>
            </Box>
        </div>
        
    );
}

export default Textfield;
