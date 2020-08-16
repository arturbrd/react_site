import React from 'react';
import { store } from "../index.js";
import { getState } from "redux";
import { connect } from "react-redux";

const taskStyle = {
    backgroundColor: "orange",
    padding: 12
}

export class TaskList extends React.Component {
    render() {
        let renderTasks = [];
        for (let i = 0; i < this.props.tasks.length; i++) {
            renderTasks.push(<Task data={this.props.tasks[i]} />);
        };
        return (
            <div>{renderTasks}</div>
        );
    }
}
class Task extends React.Component {
    render() {
        return (<div style={taskStyle}>
            <h3>{this.props.data.title}</h3>
            <br />
            <p>{this.props.data.description}</p>
        </div>);
    }
}

const mapStateToProps = function(state) {
    let array = [];
    for (let i = 0; i < state.length; i++) {
        array.push({
            title: state[i].title,
            description: state[i].description
        })
    };
    return {
        tasks: array
    };
}

export default connect(mapStateToProps)(TaskList);