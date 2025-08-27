import { useRef, useContext } from "react";
import classes from './NewTodo.module.css'
import { TodosContext } from "../store/todosContext";

export default function NewTodo() {
    const todosCtx = useContext(TodosContext);
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        if (enteredText.trim().length === 0) {
            return;
        }
        todosCtx.addTodo(enteredText);
    }

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoTextInputRef} />
            <button>Add todo</button>
        </form>
    );
};