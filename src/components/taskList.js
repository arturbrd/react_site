import React from 'react';
//import { store } from "../index.js";
import { connect } from 'react-redux';

const taskStyle = {
    backgroundColor: "orange",
    padding: 12
}

class TaskList extends React.Component {
    render() {
        let renderTasks = [];
        for (let i = 0; i < this.props.tasksArray.length; i++) {
            renderTasks.push(<Task data={this.props.tasksArray[i]} key={i} nr={i + 1} />);
        };
        return (
            <div>{renderTasks}</div>
        );
    }
}
class Task extends React.Component {
    render() {
        return (<div style={taskStyle}>
            <h3>{this.props.nr}. {this.props.data.title}</h3>
            <br />
            <p>{this.props.data.description}</p>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        tasksArray: state.tasksArray
    }
}

export default connect(mapStateToProps)(TaskList);