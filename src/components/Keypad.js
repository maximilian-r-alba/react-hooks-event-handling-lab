import React from "react"
// Code Keypad Component Here
function Keypad(props){
    return (
        <input onChange = {() => console.log('Entering password...')} type ="password" />
    )
}

export default Keypad