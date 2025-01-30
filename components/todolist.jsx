import { useState, useCallback } from 'react';
import TodoForm from './todoform';
import TodoListDisplay from './todolistdisplay';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = useCallback((newTodo) => {
        setTodos((prevTodos) => [...prevTodos, { text: newTodo, completed: false }]);
    }, []);

    const handleToggleTodo = useCallback((index) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo, i) =>
                i === index ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }, []);

    const handleDeleteTodo = useCallback((index) => {
        setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    }, []);

    console.count('Главный компонент отрендерен');

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <h1>Список дел</h1>
            <TodoForm onAddTodo={handleAddTodo} />
            <TodoListDisplay todos={todos} onToggleTodo={handleToggleTodo} onDeleteTodo={handleDeleteTodo} />
        </div>
    );
};

export default TodoList;
