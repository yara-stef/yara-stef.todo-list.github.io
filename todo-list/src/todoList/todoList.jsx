import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import TodoForm from '../todoForm/todoForm';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { borderRadius } from '@mui/system';

const TodoList = (props) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const theme = createTheme({
      palette: {
        neutral: {
          main: 'rgb(220, 220, 220)',
          contrastText: '#black',
        },
      },
    });

    
  
  return (
    <div className='checkbox'>
      {props.todos.map((todoItem) => {
        const { id, text, complete } = todoItem;
        return (
          <div key={id}>
            <div className='checkbox-inner' key={id}>
              <div onClick={() => props.toggle(id)}>
                {!complete ? (
                  <Checkbox {...label} />
                ) : (
                    <Checkbox {...label} defaultChecked />
                )}
              </div>            
            <p className={complete ? 'text-done' : ''}>{text}</p>
            <ThemeProvider theme={theme}>
                  <Button sx={{borderRadius: 50, }} color="neutral" variant="contained" onClick={() => props.delete(id)}>
                    Delete
                  </Button>
            </ThemeProvider>
            </div>            
            <hr></hr>
          </div>
          
        )
      })}
      </div>
       
    );
};

export default TodoList;

