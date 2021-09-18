import axios from 'axios';
import {IPlayer} from '../interfaces/IPlayer'

export async function getPlayers() {
    try {
       let res = await axios.get(`http://89.223.26.208:2222/players`, 
       {}) 
        return res.data as IPlayer[]
    }
    catch (err) {
        return undefined
    }
}