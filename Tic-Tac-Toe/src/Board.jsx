import { useState } from 'react';
function Square() {

    function clickHandler() {
        setVale("X");
    }

    const [value, setVale] = useState(null);
    return <button onClick={clickHandler} className="bg-white border border-gray-400 h-12 w-12 m-1 leading-1 text-lg">{value}</button>
};

export default function Board() {

    return (
        <>
            <div className="flex">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="flex">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="flex">
                <Square />
                <Square />
                <Square />
            </div>
        </>
    )

}