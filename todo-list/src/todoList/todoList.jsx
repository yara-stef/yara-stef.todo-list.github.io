import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const TodoList = (props) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
        
  
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
              <Button sx={{
                borderRadius: 50,
                color: '#212121',
                bgcolor: '#eeeeee'
              }}
              variant="contained" onClick={() => props.delete(id)}>
                    Delete
              </Button>            
            </div>            
            <hr></hr>
          </div>
          
        )
      })}
      </div>
       
    );
};

export default TodoList;

