import React from 'react';

const style = {
    backgroundColor: "green",
    align: "center",
    fontFamily: "Arial",
    margin: 0,
    padding: 0
}

export class Header extends React.Component {
    render() {
        return ( 
            <div style={style}>
                <h1>TO DO list!!!</h1>
                <h2>Create some tasks</h2>
            </div>
        )
    }
}