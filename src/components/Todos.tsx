// import { FC } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css'

// const Todos: FC<{ items: Todo[] }> = ({ items }) => {
//     return (
//         <ul>
//             {items.map((item) => (
//                 <li key={item.id}>{item.text}</li>
//             ))}
//         </ul>
//     );
// };

// export default Todos;

export default function Todos({ items, onRemoveTodo }: { items: Todo[], onRemoveTodo: (id: string) => void } ) {
    return (
        <ul className={classes.todos}>
            {items.map((item) => (
                <TodoItem key={item.id} text={item.text} onRemoveTodo={() => onRemoveTodo(item.id)}/>
            ))}
        </ul>
    )
}