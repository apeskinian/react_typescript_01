import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

import { useState } from 'react';

export default function App() {
  const [ todos, setTodos ] = useState<Todo[]>([]);

  function handleAddNewTodo(todoText: string) {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  function handleRemoveTodo(todoId: string) {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== todoId))
  }

  return (
    <div>
      <NewTodo onAddTodo={handleAddNewTodo}/>
      <Todos items={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  );
}