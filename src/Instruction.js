import React from 'react';

class Instruction extends React.Component {
    render() {
        return (<div className='instruction col-lg-3'>
            <p>
                <span id='highlight'>Instruction:
                </span>
                Click to see the Programming Language behind each card. If you match the same language for two cards, you gain one point. Match all the cards to win.</p>
            <div className="fb-share-button row" data-href="https://mikah13.github.io/memory-game/" data-layout="button" data-size="large" data-mobile-iframe="true">
                <a className="fb-xfbml-parse-ignore" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmikah13.github.io%2Fmemory-game%2F&amp;src=sdkpreparse">Share</a>
            </div>
        </div>)
    }
}
export default Instruction;
