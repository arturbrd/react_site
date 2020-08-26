import React from 'react';

class DeleteButton extends React.Component {
    render() {
        console.log("i cyk i pyk renderowanie przycisku usuwania");
        return (
            <button onClick={() => this.props.onClick(this.props.id, "delete")}>DELETE</button>
        )
    }
}

export default DeleteButton;