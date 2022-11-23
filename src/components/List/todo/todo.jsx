import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

Todo.propTypes = {
    todoList: PropTypes.array,
    activeId: PropTypes.number,
    onTodoClick: PropTypes.func
};

Todo.defaultProps = {
    todoList: [],
    activeId: null,
    onTodoClick: null
}

function Todo(props) {
    const {todoList, activeId, onTodoClick} = props;

    const handleClick = (todo) => {
        if (onTodoClick){
            onTodoClick(todo);
        }
    }

    const listItems = todoList.map((item, i) =>
        <li key={i} className={item.id === activeId ? 'activeTodo' : ''} onClick={() => handleClick(item)}>
            <p>Id: {item.id} | {item.title}</p>
        </li>
    );
    return (
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}

export default Todo;