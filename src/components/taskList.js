import React from 'react';
import { connect } from 'react-redux';
import Task from "./task"
import { deleteTask, changeToDone } from '../index';

const taskListStyle = {
    backgroundColor: "yellow",
    padding: 12
}

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(ID, type) {
        console.log("funkcja handleClick została wywołana");
        console.log(`ID w funkcji handleClick ${ID}`);
        if (type === "delete") {
            this.props.deleteTask(ID);
        }
        else if (type === "change to done") {
            this.props.changeToDone(ID);
        }
        else {
            console.log("Błędny typ operacji")
        }
    }

    render() {
        let renderTasks = [];
        for (let i = 0; i < this.props.length; i++) {
            renderTasks.push(<Task onClick={this.handleClick} key={i} nr={i + 1} task={this.props.tasks[i]} />);
        };
        console.log("i cyk i pyk renderowanie listy")
        return (
            <div style={taskListStyle}>
                <div>
                    <h3>You have {this.props.length} {this.props.length === 1 ? "task." : "tasks."}</h3>
                    <h3>{this.props.numberOfDone} of them {this.props.numberOfDone === 1 ? "is" : "are"} done.</h3>
                </div>
                {renderTasks}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let counter = 0;
    for (let i = 0; i < state.tasksArray.length; i++) {
        if (state.tasksArray[i].isDone === true) counter++;
    }
    return {
        tasks: state.tasksArray,
        length: state.tasksArray.length,
        numberOfDone: counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (ID) => { dispatch(deleteTask(ID)); },
        changeToDone: (ID) => { dispatch(changeToDone(ID)); }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);