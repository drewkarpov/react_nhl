import React,{ ButtonHTMLAttributes, Component, DetailedHTMLProps, MouseEvent } from 'react'

export interface IButton {
    text : string
    class : string
    type? : string
    name? : string
    onClick? : () => void
}


export const Button : React.FC<IButton> = props => {
    return(
        <button onClick={props.onClick} className="btn waves-effect waves-light" type="submit" name="action">{props.text}
        <i className="material-icons right">create</i>
      </button>
    );
}