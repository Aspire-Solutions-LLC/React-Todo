import React from 'react';

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            taskText: "",
            
        }
    }
    changeHandler = event => {
       
        this.setState({ taskText: event.target.value})
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.addTask(this.state.taskText);
        this.setState({ taskText: '' });
    }
   
    render(){
        return(
            <form onSubmit={this.submitHandler}>
                <input type="text" name="taskText" value={this.state.taskText} onChange={this.changeHandler} />
                <button onClick={this.props.clear}>Clear</button>
                <button type="submit">Add Task</button>
            </form>
        )
    }
}

export default TodoForm;