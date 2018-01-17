import React from 'react';

class Instruction extends React.Component {
    render() {
        return (<div className='instruction col-lg-3'>
            <p>
                <span id='highlight'>Instruction:
                </span>
                Click to see the Programming Language behind each card. If you match the same language for two cards, you gain one point. Match all the cards to win.</p>
            <div className="fb-like" data-href="https://mikah13.github.io/memory-game/" data-layout="button_count" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div>
        </div>)
    }
}
export default Instruction;
