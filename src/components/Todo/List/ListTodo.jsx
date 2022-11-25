import ItemTodo from "../Item/ItemTodo";
import {useSelector} from "react-redux";
import "./styles.scss"
const ListTodo = () =>{
    const todos = useSelector((state) => {
        return state.tasks;
    })

    return (
        <div className="div-todo-list">
            <h2 className="title-todo-list">Todo List</h2>
            <ul className="task-list">
                {todos.map((todo) => (
                    <ItemTodo key={todo.id} id={todo.id} title={todo.name}/>
                ))}
            </ul>
        </div>

    );
};


export default ListTodo;