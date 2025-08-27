import { createContext, ReactNode, useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}

export const TodosContext = createContext<TodosContextObj>({
    items: [],
    addTodo: () => { },
    removeTodo: (id: string) => { }
});

export default function TodosContextProvider({ children }: { children: ReactNode }) {
    const [todos, setTodos] = useState<Todo[]>([]);

    function handleAddNewTodo(todoText: string) {
        const newTodo = new Todo(todoText);
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    }

    function handleRemoveTodo(todoId: string) {
        setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== todoId))
    }

    const contextValues: TodosContextObj = {
        items: todos,
        addTodo: handleAddNewTodo,
        removeTodo: handleRemoveTodo
    }

    return (
        <TodosContext.Provider value={contextValues}>
            {children}
        </TodosContext.Provider>
    )
}