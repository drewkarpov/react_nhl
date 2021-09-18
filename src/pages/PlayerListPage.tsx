import React, {useEffect, useState } from 'react';
import {PlayerList} from '../components/PlayerList'
import {IPlayer} from '../interfaces/IPlayer'
import {getPlayers} from '../network/AxiosExecutor'

export const PlayerListPage : React.FC = () => {
    const [players , setPlayerList] = useState<IPlayer[]>();

    useEffect(() => {
            getPlayers().then(players => {
                console.log(players)
                localStorage.setItem('players', JSON.stringify(players))
                setPlayerList(players)
            })
        
    }, []);

    return(
        <>
        <PlayerList players= {players} ></PlayerList>
        </>
    )
}