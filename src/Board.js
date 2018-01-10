import React from 'react';
import Card from './Card';
import Restart from './Restart';
import Information from './Information';
import logo0 from './0.png'
import logo1 from './1.png'
import logo2 from './2.png'
import logo3 from './3.png'
import logo4 from './4.png'
import logo5 from './5.png'
import logo6 from './6.png'
import logo7 from './7.png'
import logo8 from './8.png'
import logo9 from './9.png'

const imgArr = [
    logo0,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9
]
const BOARD_SIZE = 4;
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickable: true,
            lastMatch: null,
            move: 0,
            matched: [],
            check: [],
            board: this.props.board
        }
    }
    numbersPool = _ => {
        let arr = [];
        for (let i = 0; i < BOARD_SIZE; i++) {
            let rand = Math.floor(Math.random() * 10);
            while (arr.indexOf(rand) !== -1) {
                rand = Math.floor(Math.random() * 10);
            }
            arr.push(rand)
        }
        return arr;
    }
    createBoard = _ => {
        let pool = this.numbersPool();
        let arr = Array(BOARD_SIZE).fill(' ').map(e => Array(BOARD_SIZE).fill(' '));
        let obj = {};
        pool.forEach(e => {
            obj[`${e}`] = BOARD_SIZE;
        })
        for (let i = 0; i < BOARD_SIZE; i++) {
            while (obj['' + pool[i]] !== 0) {
                let col = Math.floor(Math.random() * BOARD_SIZE);
                let row = Math.floor(Math.random() * BOARD_SIZE);
                let insert = true;
                while (insert) {
                    if (arr[row][col] === ' ') {
                        arr[row][col] = `${pool[i]}`;
                        obj[`${pool[i]}`] = obj[`${pool[i]}`] - 1;
                        insert = false;
                    } else {
                        col = Math.floor(Math.random() * BOARD_SIZE);
                        row = Math.floor(Math.random() * BOARD_SIZE);
                    }
                }
            }
        }
        return arr;
    }
    newGame = _ => {
        this.setState({
            clickable: true,
            matched: [],
            check: [],
            board: this.createBoard(),
            lastMatch: null,
            move: 0
        })
        for (let i = 0; i < BOARD_SIZE * BOARD_SIZE; i++) {
            let el = document.getElementById(i);
            el.innerHTML = '';
            el.className = 'card';
        }
    }
    winGame = _ => {
        if (this.state.matched.length === BOARD_SIZE * BOARD_SIZE) {
            setTimeout(_ => {
                this.newGame();
            }, 4000)
        }

    }
    clickEvent = e => {
        if (this.state.clickable) {
            let id = e.target.getAttribute('id')
            if (this.state.matched.indexOf(id) === -1) {
                e.target.className = 'card show animated flipInY';
                let number = this.state.board[parseInt(id / BOARD_SIZE, 10)][id % BOARD_SIZE];
                e.target.innerHTML = `<img src='${imgArr[number]}'/>`
                if (this.state.check.length === 0) {
                    let check = this.state.check;
                    check.push(id)
                    this.setState({check: check})
                } else if (this.state.check.length === 1) {
                    let move = this.state.move;
                    move++;
                    let check = this.state.check;
                    check.push(id)
                    this.setState({check: check})
                    let firstCard = document.getElementById(this.state.check[0]);
                    let secondCard = document.getElementById(this.state.check[1]);
                    this.setState({clickable: false, move: move})
                    if (firstCard.innerHTML === secondCard.innerHTML) {
                        let matched = this.state.matched;
                        matched.push(this.state.check[0]);
                        matched.push(this.state.check[1]);
                        this.setState({matched: matched})
                        setTimeout(_ => {
                            firstCard.className = 'card matched';
                            secondCard.className = 'card matched';
                            firstCard.innerHTML = '';
                            secondCard.innerHTML = '';
                            this.setState({check: [], clickable: true, lastMatch: number})
                        }, 1100)
                    } else {
                        setTimeout(_ => {
                            firstCard.className = 'card';
                            secondCard.className = 'card';
                            firstCard.innerHTML = '';
                            secondCard.innerHTML = '';
                            this.setState({check: [], clickable: true})
                        }, 1100)

                    }

                }
            }
        }

    }
    generateBoardRow = a => {
        return this.state.board[a].map((e, i) => {
            return <Card handleClick={this.clickEvent} id={a * BOARD_SIZE + i} val={e} key={a * BOARD_SIZE + i}/>

        });
    }
    generateBoard = _ => this.state.board.map((e, i) => {
        return (<div key={i} className="row board-row">{this.generateBoardRow(i)}</div>)
    })
    render() {
        this.winGame();
        return (<div className="row col-lg-9">
            <Information number={this.state.lastMatch}/>
            <div className="board ">
                <h1 id="header">
                    Programming Language Game
                </h1>
                {this.generateBoard()}<h3 id="move">Move:{this.state.move}</h3><Restart restart={this.newGame}/>

            </div>
        </div>)
    }
}

export default Board;
