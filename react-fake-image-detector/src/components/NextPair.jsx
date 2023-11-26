import React from "react";

export default function NextPair({ handleNextPair, handleReset }) {
    return (
        <>
            <button onClick={handleNextPair}>Next Pair</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}