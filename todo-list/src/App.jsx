import { useState, useEffect } from 'react'
import './App.css'
import Title from './todo/todo'
import TodoForm from './todoForm/todoForm'
import TodoList from './todoList/todoList'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles';

const App = () => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'))  || [];
    const [todos, setTodos] = useState(savedTodos);
    // const [todoItem, setTodoItem] = useState('');
    const theme = createTheme({
        palette: {    
            secondary: {
            main: '#black',
            },
        },
    });

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (todoItem) {
    //         let uniqueId = new Date().getTime().toString(36) + new Date().getUTCMilliseconds();
    //         let newTodoItem = {
    //             id: uniqueId,
    //             todo: todoItem,
    //             complete: false,
    //         };
    //         setTodos([newTodoItem, ...todos]);
    //         setTodoItem('');
    //     } else {
    //         setTodoItem('');
    //     }
    // };

    const addTodo = (todo) => {
        if (!todo.text) {
            return
        }; 
        
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }
    
    const deleteTodo = (id) => {
        let newTodos = todos.filter((todo) => todo.id !== id);
        setTodos([...newTodos]);
    };

    const toggleComplete = (id) => {
        let updatedTodos = todos.filter((todo) => {
            if (todo.id === id) {
                todo.complete = !todo.complete;
               console.log(todo.complete); 
            }
            
            return todo;
        });
        setTodos(updatedTodos);
        console.log(updatedTodos);
        console.log(todos);
    };
    
    // useEffect(() => {
    //     const item = JSON.parse(localStorage.getItem('todos'));
    //     if (item) {
    //         setTodos(item);
    //         console.log(item);
    //     }
    // }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        console.log(todos);
    }, [todos]);

    return (
        <div>
            <Title />
            <TodoForm onSubmit={addTodo} 
                secondComponent={<ThemeProvider theme={theme} > </ThemeProvider>} />
            <TodoList toggle={toggleComplete} delete={deleteTodo} todos={todos} />
        </div>
    );
};

export default App
