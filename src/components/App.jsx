import React from 'react';

// 1. crear un componente square ---> buton que tendra una class name
// 2.Cambia el método render de Square para mostrar ese valor, reemplazando {/* TODO */} con {this.props.value}:

// 3.Vamos a rellenar el componente de Square con una “X” cuando damos click en él. Primero, cambia la etiqueta button que es retornada del método render() del omponente Square a esto:
//4.Primero, vamos a agregar el constructor a la clase para inicializar el estado:

// other changes
/*
Reemplazar this.state.value por this.props.value en el método render de Square
Reemplazar this.setState() por this.props.onClick() en el método render de Square
Eliminar el constructor de Square porque el componente ya no hace seguimiento del estado del juego
 */

// cambiar los la clase Square por componenetes de funcion.

function Square(props) {
    return (
        <button className='square' onClick={props.onClick}>
            {props.value}
        </button>
        
    );

}
export default Square;
