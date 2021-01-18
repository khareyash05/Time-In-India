import React, { useState } from "react"
import './index.css'

function App(){
    setInterval(updateTime,1000)

    const now  = new Date().toLocaleTimeString()
    const [time,setTime] = useState(now)

    function updateTime(){
        const newTime = new Date().toLocaleTimeString()
        setTime(newTime)
    }

    return (
        <div>
            <h1 className="name">Time in India is {time}</h1>
        </div>
    )
}

//To chnage text using useState hook and to change colour on mouse over

// function App(){
//     const [headingText,setHeadingText] = React.useState("hello")
//     const [isMousedOver,setMouseOver] = React.useState(false)

//     function updateHeadingText(){
//         setHeadingText("Bye")
//     }

//     function updateColor(){
//         setMouseOver(true)
//     }

//     function reUpdateColor(){
//         setMouseOver(false)
//     }

//     return (
//         <div>
//             <h1 style ={{color:"red"}}>{headingText}</h1>
//             <button
//             style = {{backgroundColor : isMousedOver ? "black":"white"}}
//             onMouseOver={updateColor}
//             onMouseOut = {reUpdateColor}
//             onClick = {updateHeadingText}
//             >Click me </button>
//         </div>
//     )
    
// }
export default App
