import React from 'react';
import { connect } from 'react-redux';
import Task from "./task"

const taskListStyle = {
    backgroundColor: "yellow",
    padding: 12
}

class TaskList extends React.Component {
    render() {
        let renderTasks = [];
        for (let i = 0; i < this.props.tasksArray.length; i++) {
            renderTasks.push(<Task data={this.props.tasksArray[i]} key={i} nr={i + 1} taskId={this.props.tasksArray[i].ID} isDone={this.props.tasksArray[i].isDone}/>);
        };
        return (
            <div style={taskListStyle}>{renderTasks}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasksArray: state.tasksArray
    }
}

export default connect(mapStateToProps)(TaskList);