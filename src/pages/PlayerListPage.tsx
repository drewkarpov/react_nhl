import React, {useEffect, useState } from 'react';
import {PlayerList} from '../components/PlayerList'
import {IPlayer} from '../interfaces/IPlayer'
import {getPlayers} from '../network/AxiosExecutor'

export const PlayerListPage : React.FC = () => {
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
        <>
        <PlayerList players= {players} ></PlayerList>
        </>
    )
}