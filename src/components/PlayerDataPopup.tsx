import React from 'react'
import { useHistory } from 'react-router-dom';
import {Button, IButton} from './Button'

export const PlayerDataPopup : React.FC = () => {  
    const history = useHistory();

    const routeChange = () =>{ 
        let path = `/`; 
        history.push(path);
      }
      

    let addButton : IButton = {text : "add player", class : "cardButton btn waves-effect waves-light",onClick: routeChange}
    let closeButton : IButton = {text : "cancel", class : "cardButton btn waves-effect waves-light",onClick: routeChange}


        return (  
            <div className='popup'>  
                <div className='popup\_inner'>      
                    <h3 className='headerText'>Add player menu </h3> 
                        <div className="input-field mt2">
                        <label htmlFor="title" className="active"> create new player</label>
                        <input className="text inputField" placeholder="name" />
                        <input className="text inputField" placeholder="comment" />
                        </div>
                            <Button {...addButton} ></Button>
                            <Button {...closeButton} ></Button>
                </div>  
            </div>  
        );  
    }