import React from 'react'

import './advice.css'

const Advice = ({ advice, getRandomAdvice }) => {
    return (
        <>
            <div className="advice">
                {advice}
            </div>
            <button onClick={getRandomAdvice}>GIVE ME ADVICE!</button>
        </>
    )
}

export default Advice
