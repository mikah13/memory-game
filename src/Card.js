import React from 'react';
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            val: this.props.val
        }
    }
    handleClick = _ => {
        if (this.state.val !== ' ') {
            this.setState({clicked: true})
        }
    }
    render() {
        return (<div id={this.props.id} onClick={this.props.handleClick} className='card'></div>)
    }
}
export default Card;
