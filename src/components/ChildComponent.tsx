import React, { useState } from 'react';

const ChildComponent: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos(prevTodos => [...prevTodos, newTodo.trim()]);
      setNewTodo('');
    }
  };

  console.log('Child component rendered');

  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h3 className="text-lg font-semibold mb-2">Todo List</h3>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-grow border border-gray-300 rounded-l px-2 py-1"
          placeholder="Add a new todo"
        />
        <button
          onClick={addTodo}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded-r"
        >
          Add
        </button>
      </div>
      <ul className="list-disc pl-5">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChildComponent;