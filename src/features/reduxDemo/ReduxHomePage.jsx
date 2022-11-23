import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {addNewTodo, setActiveTodo} from "../../store/actions/todo";
import Todo from "../../components/List/todo/todo";

ReduxHomePage.propTypes = {

};

const randomNumber = () => {
    return 1000 + Math.trunc((Math.random() * 9000));
}

function ReduxHomePage(props) {
    // const userList = useSelector(state => state.user.users)
    const todoList = useSelector(state => state.todo.list)
    const activeId = useSelector(state => state.todo.activeId)

    const dispatch = useDispatch();
    console.log(todoList)

    const handleAddTodo = () => {
        const newId = randomNumber();
        const newTodo = {
            id: newId,
            title: 'todo: ' + newId
        }
        const action = addNewTodo(newTodo);
        dispatch(action);
    }
        const handleTodoClick = (todo)=> {
            const action = setActiveTodo(todo);
            dispatch(action);
        }
    return (
        <div>
            <h1>REDUX HOME PAGE</h1>
                <Todo todoList={todoList} activeId={activeId} onTodoClick={handleTodoClick}></Todo>
            <button onClick={handleAddTodo}>Random Todo</button>
        </div>
    );
}


export default ReduxHomePage;