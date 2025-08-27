// import { FC } from "react";
import Todo from "../models/todo";

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

export default function Todos({ items }: { items: Todo[] } ) {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}