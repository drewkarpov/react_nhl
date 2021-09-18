import React, {useEffect, useState } from 'react';
import {IPlayer} from '../interfaces/IPlayer'
import {getPlayers} from '../network/AxiosExecutor';
import {testAttribute} from '../helpers/TestAttribute';
import { makeStyles } from '@material-ui/core/styles';
import PlayerCard from '../components/Card'
import { Grid}  from "@material-ui/core";

export const PlayerTable : React.FC = () =>{
    const [players , setPlayerList] = useState<IPlayer[]>();

    const contentTemplateStyle = makeStyles({
        gridContainer: {
            paddingLeft: "40px",
            paddingRight: "40px"
        }
    })
    

    useEffect(() => {
            getPlayers().then(players => {
                let kek : IPlayer[] = players as IPlayer[]
                console.log(kek)
                setPlayerList(players)
            })
        } 
    , []);

      
    return(  
        <Grid container spacing={4} className={contentTemplateStyle().gridContainer}>
            {players?.map((item, index) => {
                return (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <PlayerCard {...item}/>
                    </Grid>
                )
            })}
        </Grid>

    )
}