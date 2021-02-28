import React from 'react'
import {Button, IButton} from './Button'
import {IPlayer} from '../interfaces/IPlayer'


export const Player : React.FC<IPlayer> = (player : IPlayer) => {

  let editButton : IButton = {text : "edit player", class : "cardButton btn waves-effect waves-light"}
    return(
  <div className="row">
    <div className="col s6 m6">
      <div className="card playerCard">
        <div className="card-content white-text">
          <span className="card-title">{player.name}</span>
        <p>{player.comment}</p>
        </div>
        <div className="card-action">
          <Button  {...editButton}></Button>
        </div>
      </div>
    </div>
  </div>
    )
}