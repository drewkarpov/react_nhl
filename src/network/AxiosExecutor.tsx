import axios from 'axios';
import {IPlayer} from '../interfaces/IPlayer'

export async function getPlayers() {
    try {
       let res = await axios(`http://89.223.88.248:3333/users?value`, 
       {headers: {"Access-Control-Allow-Origin": "*"}}) 
        return res.data as IPlayer[]
    }
    catch (err) {
        console.error(err);
    }
}

export async function getPlayersByValue(playerName : String) {
    try {
       let res = await axios(`http://89.223.88.248:3333/users`, 
       {headers: {"Access-Control-Allow-Origin": "*"} , params : {"value": playerName}}) 
        return res.data as IPlayer[]
    }
    catch (err) {
        console.error(err);
    }
}