import React from 'react';

class DoneButton extends React.Component {
    render() {
        console.log("i cyk i pyk renderowanie przycisku zmieniania na done");
        return (
            <button onClick={() => this.props.onClick(this.props.id, "change to done")}>DONE</button>
        )
    }
}

export default DoneButton;