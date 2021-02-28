import React, {useEffect, useState } from 'react';
import {IPlayer} from '../interfaces/IPlayer'
import {getPlayers} from '../network/AxiosExecutor'

export const PlayerTable : React.FC = () =>{
    const [players , setPlayerList] = useState<IPlayer[]>();

    useEffect(() => {
        const savedPlayers = JSON.parse(localStorage.getItem('players') || '[]') as IPlayer[]

        if (savedPlayers.length === 0){
            getPlayers().then(players => {
                localStorage.setItem('players', JSON.stringify(players))
                setPlayerList(players)
            })
        } else {
            setPlayerList(savedPlayers)
        }
       
    }, []);
      
    return(  
        <ul className="collection">
             {players?.map(player =>{
                 return(
                <li className="collection-item avatar" key={player.id}>
                <span className="title">{player.name}</span>
                <p>status: {player.status} </p>
                <a href="/" className="secondary-content"><i className="material-icons">grade</i></a>
                 </li>
             )})}
      </ul>
    )
}