import React, {useEffect, useState } from 'react';
import { Player} from './Player'
import {IPlayer} from '../interfaces/IPlayer'
import {getPlayers} from '../network/AxiosExecutor'

export interface PlayerListProps{
    players : IPlayer[] | undefined
}

export const PlayerList : React.FC<PlayerListProps> = props =>{
    const [players , setPlayerList] = useState<IPlayer[]| undefined>();
    let [search, setSearch]: [string, (search: string) => void] = React.useState("")

    type InputEvent = React.ChangeEvent<HTMLInputElement>;

   const update = (e: InputEvent): void => {
    //setSearch(e.target.value)
    getPlayers().then(players =>
            setPlayerList(players)
            )
   }


    return(
        <div>
        <input className="text" type="text" value={search} onChange={update}></input>
        <ul className="playerList ul"> 
            {players?.map(player =>{
                return (
                <li key ={ player.id}>
                    <Player {...player}></Player>
                </li>
                )
            })}      
        )
      </ul>
      </div>
    );
}