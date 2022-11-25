import React from 'react';
import AddTodo from "../../components/Todo/Add/AddTodo";
import ListTodo from "../../components/Todo/List/ListTodo";
import './styles.scss'
import Header from "../../components/Header/header";
function TodoHomePage(props) {
    const listContentHeader = {
        mainText: 'Todo App',
    }
    return (
        <div>
            <Header listContentHeader={listContentHeader}/>
            <AddTodo/>
            <ListTodo/>
        </div>
    );
}

export default TodoHomePage;