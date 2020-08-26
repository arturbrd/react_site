import React from 'react';
import DoneButton from "./doneButton";
import DeleteButton from "./deleteButton";

let taskStyle = {
    backgroundColor: "orange",
    color: "black"
}

class Task extends React.Component {
    render() {
        console.log("i cyk i pyk renderowanie taska");
        console.log(this.props.task);
        return (<div style={taskStyle}>
            <h3>{this.props.nr}. {this.props.task.title}</h3>
            <h4>{this.props.task.isDone ? "DONE" : "NOT DONE"}</h4>
            <br />
            <p>{this.props.task.description}</p>
            <br />
            <DoneButton onClick={this.props.onClick} id={this.props.task.ID} />
            <DeleteButton onClick={this.props.onClick} id={this.props.task.ID} />
        </div>);
    }
}

export default Task;