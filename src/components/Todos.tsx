// import { FC } from "react";
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

import TodoItem from "./TodoItem";
import classes from './Todos.module.css'
import { TodosContext } from "../store/todosContext";

import { useContext } from "react";

export default function Todos() {
    const todosCtx = useContext(TodosContext);

    return (
        <ul className={classes.todos}>
            {todosCtx.items.map((item) => (
                <TodoItem key={item.id} text={item.text} onRemoveTodo={() => todosCtx.removeTodo(item.id)}/>
            ))}
        </ul>
    )
}