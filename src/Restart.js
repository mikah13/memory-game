import React from 'react';
class Restart extends React.Component {
    render() {
        return (<div className='row'>
            <button onClick={this.props.restart} className="btn btn-primary restart">New Game</button>
        </div>)
    }
}
export default Restart;
