import { useState, useEffect } from 'react'
import './App.css'
import Title from './todo/todo'
import TodoForm from './todoForm/todoForm'
import TodoList from './todoList/todoList'

const App = () => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'))  || [];
    const [todos, setTodos] = useState(savedTodos);
        
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
    };
    
   
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <div>
            <Title />
            <TodoForm onSubmit={addTodo} />
            <TodoList toggle={toggleComplete} delete={deleteTodo} todos={todos} />
        </div>
    );
};

export default App
