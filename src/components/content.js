import React from 'react';
import AddTaskButton from "./components/addTaskButton";

const style = {
    backroundColor: "brown",
    fontFamily: "Consolas"
}

export class Content extends React.Component {
    render() {
        <div style={style}>
            <AddTaskButton />
        </div>
    }
}