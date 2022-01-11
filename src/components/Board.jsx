import React from 'react';
import Square from './App';


// crear el componente Board

//Añade un constructor al Board y establece el estado inicial de Board para contener un arreglo con 9 valores null. Estos 9 nulls corresponden a los 9 cuadrados:
// le agregue al state otra propiedad para identificar cuando es el turno de la 'o'

/*
Eliminar el constructor en Board.
Reemplazar this.state.squares[i] por this.props.squares[i] en el método renderSquare del componente Board.
Reemplazar this.handleClick(i) por this.props.onClick(i) en el método renderSquare del componente Board.
*/
class Board extends React.Component {
    renderSquare(i) {
        return(
            <Square 
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}

            />
        );
    }
    
    render() {
        return(
            <div>
                <div className='board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                </div>
                <div className='board-row'>
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

function playerWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
}            

export {Board,playerWinner}

  