import React from "react";

import pt from "prop-types";

class TodoItem extends React.Component{

    handleToggleTodoClick = () => {
        const { todo, toggleTodo } = this.props;
        toggleTodo(todo.id);
    }

    handleRemoveTodoClick = () => {
        const { todo, removeTodo } = this.props;
        removeTodo(todo.id);
    }

    render(){
        const { todo } = this.props;
        const textClass = todo.completed ? "todo-item-completed" : null;

        return (
            <li className="todo-item">
                <span className="todo-item-item" onClick={this.handleToggleTodoClick} >
                    <input type="checkbox" readOnly checked={todo.completed} />
                    <span className={textClass}>{todo.text}</span>
                </span>
                <span className="todo-item-delete-button" onClick={this.handleRemoveTodoClick}>x</span>
            </li>
        );

    }

}

TodoItem.propTypes = {
    todo: pt.object,
    removeTodo: pt.func,
    toggleTodo: pt.func
}

export default TodoItem;