import { useState } from 'react';
function Square({value,squareClick}) {


    return <button onClick={squareClick} className="bg-white border border-gray-400 h-12 w-12 m-1 leading-1 text-lg">{value}</button>
};

export default function Board() {
    

    const [squares,setSquares]=useState(Array(9).fill(null));
    const [xIsNext,setXIsNext]=useState(true)

    function handleClick(i){
        if(squares[i]){
            return;
        }
        const nextSquare=squares.slice();
        if(xIsNext){
            nextSquare[i]="X"
        }else{
            nextSquare[i]="O"
        }
        setSquares(nextSquare)
        setXIsNext(!xIsNext)
    }

    return (
        <>
            <div className="flex">
                <Square value={squares[0]} squareClick={()=>handleClick(0)} />
                <Square value={squares[1]} squareClick={()=>handleClick(1)} />
                <Square value={squares[2]} squareClick={()=>handleClick(2)} />
            </div>
            <div className="flex">
                <Square value={squares[3]} squareClick={()=>handleClick(3)} />
                <Square value={squares[4]} squareClick={()=>handleClick(4)} />
                <Square value={squares[5]} squareClick={()=>handleClick(5)} />
            </div>
            <div className="flex">
                <Square  value={squares[6]} squareClick={()=>handleClick(6)}/>
                <Square  value={squares[7]} squareClick={()=>handleClick(7)}/>
                <Square  value={squares[8]} squareClick={()=>handleClick(8)}/>
            </div>
        </>
    )

}