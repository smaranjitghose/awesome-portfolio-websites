import React from 'react';
import AnimateOnChange from 'react-animate-on-change';
const { useState, useEffect } = React


const Output = () => {
    const words = [
        " Designing",
        " UI/UX",
        " Cloud Computing",
        " Web Development",
        " Open Source",
        " Mentoring",
    ]

    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (current === words.length - 1) {
                setCurrent(0)
            } else {
                setCurrent(current + 1)
            }
        }, 2000);
        return (() => {
            clearInterval(interval)
        })
    })

    return (
        <span> 
            <h4 style={{marginTop:"35px"}}>I'm into<AnimateOnChange>{words[current]}</AnimateOnChange></h4>
        </span>
    )
}

export default Output;