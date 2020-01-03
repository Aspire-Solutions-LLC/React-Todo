import React from 'react';
import { todos } from './data';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: todos
    }
  }
  clear = event => {
    event.preventDefault();
   this.setState({todos: []});
    
}
  addTask = taskText => {
    const newTask = {
      task: taskText, 
      completed: false, 
      id: Date.now()
    }
    this.setState({
      todos: [...this.state.todos, newTask]
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addTask={this.addTask} clear={this.clear} todos={this.state.todos} />
          <TodoList todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
