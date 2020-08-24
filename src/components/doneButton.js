import React from 'react';

class DoneButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>DONE</button>
        )
    }
}

export default DoneButton;