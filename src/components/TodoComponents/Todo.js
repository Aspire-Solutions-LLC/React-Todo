import React from 'react';

const Todo = props => {
    return(
        <div
             
            onClick={e => props.toggle(props.todo.id)}
            >
                {props.todos.task}
        </div>
    )
}

export default Todo;