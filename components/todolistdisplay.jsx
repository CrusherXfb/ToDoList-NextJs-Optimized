import { memo } from 'react';
import TodoItem from './todoitem';

const TodoListDisplay = memo(({ todos, onToggleTodo, onDeleteTodo }) => {
    console.count('Список отрендерен');

    return (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    onToggle={() => onToggleTodo(index)}
                    onDelete={() => onDeleteTodo(index)}
                />
            ))}
        </ul>
    );
});

export default TodoListDisplay;
