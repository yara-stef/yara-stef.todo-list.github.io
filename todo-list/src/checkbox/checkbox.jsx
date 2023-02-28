import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { borderRadius } from '@mui/system';

const CheckBox = (props) => {
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
        const { id, todo, complete } = todoItem;
        return (
          <div className='checkbox-inner' key={id}>
            <Checkbox {...label} />
            <p className={complete ? 'text-done' : ''}>{todo}</p>
            <ThemeProvider theme={theme}>
                  <Button sx={{borderRadius: 50, }} color="neutral" variant="contained" onClick={() => props.delete(id)}>
                    Delete
                  </Button>
            </ThemeProvider>
          </div>
        )
      })}
            {/* <div className='checkbox-inner'>
                <Checkbox {...label} />
                <span>{props.todos }</span>
                <ThemeProvider theme={theme}>
                  <Button sx={{borderRadius: 50, }} color="neutral" variant="contained" onClick={() => props.delete}>
                    Delete
                  </Button>
                </ThemeProvider>
            </div>            
            <hr></hr> */}
        </div>
       
    );
};

export default CheckBox;

