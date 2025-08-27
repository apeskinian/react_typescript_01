import { useRef } from "react";
import classes from './NewTodo.module.css'

export default function NewTodo({ onAddTodo }: { onAddTodo: (text: string) => void }) {
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            return;
        }

        onAddTodo(enteredText);
    }

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoTextInputRef} />
            <button>Add todo</button>
        </form>
    );
};