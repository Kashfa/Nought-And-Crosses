import React from 'react';
import GameLogic from '../models/gameLogic.js';
import Title from '../components/Title.js';
import Board from '../components/Board.js';

class GameContainer extends React.Component {

  constructor(props) {
    super(props);
    const gameLogic = new GameLogic();

    this.state = {
      board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ],
      currentPlayer: 0,
    };

    this.positionMap = {
      0:[0, 0],
      1:[0, 1],
      2:[0, 2],
      3:[1, 0],
      4:[1, 1],
      5:[1, 2],
      6:[2, 0],
      7:[2, 1],
      8:[2, 2]
    }

    this.handleBoardClick = this.handleBoardClick.bind(this)
  }

    render() {
      return (
        <div>
        <Title/>
        <Board
          board={this.state.board}
          currentPlayer={this.state.currentPlayer}
          handleBoardClick={this.handleBoardClick}
        />
      </div>
      )
    }

    handleBoardClick(position) {
      console.log(position);

      const updatedBoard = this.state.board;
      const coordiates = this.positionMap[position];
      console.log(coordiates);
      updatedBoard[coordiates[0]][coordiates[1]] = this.state.currentPlayer;
      const nextPlayer = this.state.currentPlayer === 0 ? 1: 0;
      this.setState({currentPlayer: nextPlayer, board: updatedBoard});
    }
  }


  export default GameContainer;
