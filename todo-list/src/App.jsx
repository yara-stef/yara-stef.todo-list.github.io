import { useState, useEffect } from 'react'
import './App.css'
import Title from './title/title'
import Textfield from './textfield/textfield'
import CheckBox from './checkbox/checkbox'

const App = () => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'))  || [];
    const [todos, setTodos] = useState(savedTodos);
    const [todoItem, setTodoItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoItem) {
            let uniqueId = new Date().getTime().toString(36) + new Date().getUTCMilliseconds();
            let newTodoItem = {
                id: uniqueId,
                todo: todoItem,
                complete: false,
            };
            setTodos([newTodoItem, ...todos]);
            setTodoItem('');
        } else {
            setTodoItem('');
        }
    };
    
    const deleteTodo = (id) => {
        let newTodos = todos.filter((todo) => todo.id !== id);
        setTodos([...newTodos]);
    };

    const toggleComplete = (id) => {
        todos.find((todo) => {
            if (todo.id === id) {
                todo.complete = !todo.complete;
            }
            return setTodos([...todos]);
        });
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
            <Textfield changeText={(e) => setTodoItem(e.target.value)} todoItem={todoItem} submit={handleSubmit} />
            <CheckBox toggle={toggleComplete} delete={deleteTodo} todos={todos} />
        </div>
    );
};

export default App
