import './App.css';
import React from 'react';
import { VisibilityToolbar, AddTodoForm, TodoList } from "./components";
import VISIBILITY_TYPES from './const';

var rs = require("randomstring-ng");

class App extends React.Component{
  
  state = {
    todos: [],
    visibility: VISIBILITY_TYPES.ALL
  };

  /*
  state = {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    visibility: VISIBILITY_TYPES.ALL,
  }; 

  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }
  */

  handleAddTodo = value => {
    const { todos } = this.state;
    const newTodo = {
      id: rs.generate(),
      text: value,
      completed: false
    };

    this.setState({
      todos: [...todos, newTodo]
    });
  }

  getVisibleTodos = () => {
    const { todos, visibility } = this.state;
    if(visibility === VISIBILITY_TYPES.ALL){
      return todos;
    }

    if(visibility === VISIBILITY_TYPES.COMPLETED){
      return todos.filter(todo => todo.completed);
    }

    return todos.filter(todo => !todo.completed);
  }

  handleToggleTodo = id => {
    const { todos } = this.state;
    const todo = todos.find(item => item.id === id);
    todo.completed = !todo.completed;
    this.setState({ todos });
  }

  handleRemoveTodo = id => {
    const { todos } = this.state;
    const newTodos = todos.filter(todo => todo.id !== id);
    this.setState({ todos: newTodos });
  }

  handleRemoveCompleted = () => {
    const { todos } = this.state;
    const newTodos = todos.filter(todo => !todo.completed);
    this.setState({ todos: newTodos });
  }

  handleVisibilityChange = visibility => {
    this.setState({ visibility: visibility });
  }

  render(){
    const visibleTodos = this.getVisibleTodos();
    const hasCompletedTodos = this.state.todos.filter(todo => todo.completed).length > 0;

    return (
      <div className='App'>
        <h1 className='header'>My tasks</h1>
        <VisibilityToolbar visibilityType={this.state.visibility} onVisibilityChange={this.handleVisibilityChange} />
        <div className='todo-container'>
          <AddTodoForm addTodo={this.handleAddTodo} />
          <TodoList todos={visibleTodos} removeTodo={this.handleRemoveTodo} toggleTodo={this.handleToggleTodo} />
        </div>
        {hasCompletedTodos && (
          <span onClick={this.handleRemoveCompleted} className='btn-clear-all'>
            Clear completed
          </span>
        )}
      </div>
    );

  }


}

export default App;
