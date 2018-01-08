import React from 'react';
import Board from './Board';
import Instruction from './Instruction';
const BOARD_SIZE = 4;

class App extends React.Component {
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
    generateBoard = _ => {
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
    render() {

        return (<div className="App row"><Board board={this.generateBoard()}/><Instruction/></div>);
    }
}

export default App;
