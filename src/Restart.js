import React from 'react';
class Restart extends React.Component {
    render() {
        return (<button onClick={this.props.restart} className="restart">Restart</button>)
    }
}
export default Restart;
