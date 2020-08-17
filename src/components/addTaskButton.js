import React from 'react';
import { store, addTask } from '../index.js'
//import { dispatch } from 'redux';

export class AddTaskButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            taskName: '',
            taskDescription: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }

    handleNameChange(event) {
        this.setState({taskName: event.target.value});
    }

    handleDescriptionChange(event) {
        this.setState({taskDescription: event.target.value});
    }

    handleClick(event) {
        store.dispatch(addTask(this.state.taskName, this.state.taskDescription));

        this.setState({
            taskName: '',
            taskDescription: ''
        })
    }

    render() {
        return ( 
        <div>
                <laber for="taskName">Task name</laber>
                <br />
                <input type="text" id="taskName" value={this.state.taskName} onChange={this.handleNameChange}/>
                <br /><br />
                <laber for="taskDescription">Task description</laber>
                <br />
                <input type="text" id="taskDescription" value={this.state.taskDescription} onChange={this.handleDescriptionChange}/>
                <br />
                <button onClick={this.handleClick}>Add task</button>
        </div>);
    }
}