import React from 'react';
import DoneButton from "./doneButton";
import DeleteButton from "./deleteButton";
import { connect } from 'react-redux';
import { changeToDone, deleteTask } from '../index';

let taskStyle = {
    backgroundColor: "orange",
    color: "black"
}

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.handleDoneClick = this.handleDoneClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.state = {
            h3style: {color: "black"}
        }
    }

    handleDoneClick() {
        this.props.changeToDone(this.props.taskId);
    }

    handleDeleteClick() {
        this.props.deleteTask(this.props.taskId); //tu mamy problem
    }

    render() {
        let index = this.props.tasksArray.findIndex((currentValue) => {
            return currentValue.ID === this.props.taskId;
        })
        return (<div style={taskStyle}>
            <h3 style={this.props.tasksArray[index].isDone ? {color: "green"} : {color: "black"}}>{this.props.nr}. {this.props.data.title}</h3>
            <br />
            <p>{this.props.data.description}</p>
            <br />
            <DoneButton onClick={this.handleDoneClick} />
            <DeleteButton onClick={this.handleDeleteClick} />
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        tasksArray: state.tasksArray
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeToDone: (ID) => { dispatch(changeToDone(ID)); },
        deleteTask: (ID) => { dispatch(deleteTask(ID)); }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);