import { useState } from 'react';
import Board from "./Board";

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState(true);
    const [currentMove, setCurrentMove] = useState(0);

    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setXIsNext(!xIsNext);
    }

    function jumpTo(move) {
        setCurrentMove(move);
        setXIsNext(move % 2 === 0);
    }

    const moves = history.map((squares, move) => {
        let description = move > 0
            ? `Go to move #${move}`
            : `Go to game start`;
        return (
            <li
                key={move}
                className="bg-gray-700 text-white mb-1 p-1 rounded-sm">
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div>
            <Board
                onPlay={handlePlay}
                squares={currentSquares}
                xIsNext={xIsNext}
            />
            <div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}
