import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../index'
//import { dispatch } from 'redux';

class AddTaskButton extends React.Component {
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
        this.props.addTask(this.state.taskName, this.state.taskDescription);

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

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (name, description) => { dispatch(addTask(name, description)); }
    };
}

export default connect(null, mapDispatchToProps)(AddTaskButton);