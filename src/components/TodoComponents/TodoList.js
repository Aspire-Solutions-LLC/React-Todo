// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return(
        <div className="todo-list">
            {props.todos.map(todo => {
                return <Todo todos={todo} key={todo.id} toggleItem={props.toggle} />
            })}
        </div>
    )
}

export default TodoList;