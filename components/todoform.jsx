import { useState, memo } from 'react';

const TodoForm = memo(({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            onAddTodo(inputValue);
            setInputValue('');
        }
    };

    console.count('Окно ввода отрендерено');

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Введите новое дело"
                style={{ width: '375px', padding: '10px', marginBottom: '10px' }} />
            <button
                onClick={handleAddTodo}
                style={{ width: '100%', padding: '10px' }}>
                Добавить новый пункт
            </button>
        </div>
    );
});

export default TodoForm;
