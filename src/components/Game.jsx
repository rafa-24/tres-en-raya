import React from 'react';
import { Board } from './Board';
import { playerWinner } from './Board';

class Game extends React.Component {
    // elevar el estado
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0,
            xisnext: true, // add other property
        };
    }

    handleclick(i){
        const history = this.state.history; // expect Array(9).fill(null)
        const current = history[history.length-1];
        const squares = current.squares.slice(); // copia desde la ultima posicion de squares 
        if (playerWinner(squares) || squares[i]) {
          return;
        }
        squares[i] = this.state.xisnext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares // concatena el array inicial en con los valores en null y la copia de ese array
            }]),
            stepNumber: history.length,
          xisnext: !this.state.xisnext, // lo cambie a false
        });
    }

    // add method jumpTo(move)
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xisnext: (step % 2) === 0
        });
    }

    render(){
        //Actualizaremos el método render del componente Game para usar la entrada más reciente del historial para determinar y mostrar el estado del juego:
        // history = [null,null,null,null,null,null,null,null,null]
        // cuarrent = la ultima posiscion de history
        // winner = ejecuta la funcion de playerWinner
        
        const history = this.state.history; // expect Array(9).fill(null)
        const current = history[this.state.stepNumber];
        const winner = playerWinner(current.squares);
        //lista de movimientos map
        const moves = history.map((step,move) => {
            const desc = move ?
            'Ir a :' + move:
            'Ir al inicio de juego ';
            return ( 
                <li key={move}> 
                    <button onClick={() =>this.jumpTo(move)}>{desc}</button> 
                </li>
            );
        });



        // renderizado condicional
        let status;
        if(winner) { //true
            status = 'winner : ' + winner;
        }else {
            status = 'Next player: ' + (this.state.xisnext ? 'X' : 'O');
        }

        return(
            <div className='game'>
                <div className='game-board'>
                    <Board 
                    squares={current.squares}
                    onClick={(i)=> this.handleclick(i)}
                    />
                </div>
                <div className='info-game'>
                    <div>{status}</div>
                    <ol>{moves}</ol> 
                </div>
            </div>
        );
    }
}
export default Game;