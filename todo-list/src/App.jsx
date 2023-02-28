import { useState, useEffect } from 'react'
import './App.css'
import Title from './title/title'
import Textfield from './textfield/textfield'
import CheckBox from './checkbox/checkbox'

function App() {
    const [todos, setTodos] = useState([]);
    const [todoItem, setTodoItem] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoItem) {
            setError(false);
            let uniqueId = new Date().getTime().toString(36) + new Date().getUTCMilliseconds();
            let newTodoItem = {
                id: uniqueId,
                todo: todoItem,
                complete: false,
            };
            setTodos([newTodoItem, ...todos]);
            setTodoItem('');
        } else {
            setError(true);
            setTodoItem('');
        }
    };

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos'));
        if (todos) {
            setTodos(todos);
        }
    }, []);

    const deleteTodo = (id) => {
        let newTodos = todos.filter((todo) => todo.id !== id);
        setTodos([...newTodos]);
    };


  return (
    <div>
        <Title />
        <Textfield changeText={(e) => setTodoItem(e.target.value)} todoItem={todoItem} submit={handleSubmit} />
          <CheckBox delete={deleteTodo} error={error} todos={todos } />
    </div>
    
  )
}

export default App
