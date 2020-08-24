import React from 'react';

class DeleteButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick} >DELETE</button>
        )
    }
}

export default DeleteButton;