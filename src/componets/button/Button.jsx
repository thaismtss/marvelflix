import "./Button.css"
import React from "react"

const Button = props => {
    return (
        <button className={`Button ${ props.styleName }`} onClick={props.onFunction} >{props.title}</button>
    )
}

export default Button