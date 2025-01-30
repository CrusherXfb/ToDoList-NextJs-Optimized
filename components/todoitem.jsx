import { memo } from 'react';

const TodoItem = memo(({ todo, onToggle, onDelete }) => {
    console.count('Элемент отрендерен');

    return (
        <li style={{ padding: '10px', borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span
                onClick={onToggle}
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    cursor: 'pointer',
                    flexGrow: 1,
                }}
            >
                {todo.text}
            </span>
            <button onClick={onDelete} style={{ marginLeft: '10px' }}>
                Удалить
            </button>
        </li>
    );
});

export default TodoItem;
