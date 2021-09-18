import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom';
import {Button, IButton} from './Button'

export const PlayerDataPopup : React.FC = () => {

    let history = useHistory();
    const routeChange = () =>{
        let path = `/`;
        history.push(path);
      }
     const name =  useRef<HTMLInputElement>(null)
    const comment =  useRef<HTMLInputElement>(null)

    let addButton : IButton = {text : "add player", class : "cardButton btn waves-effect waves-light",onClick: routeChange}
    let closeButton : IButton = {text : "cancel", class : "cardButton btn waves-effect waves-light",onClick: routeChange}

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {

           // name.current!.value = ''
             console.log(name.current?.value)
            console.log(comment.current?.value)
            // setTitle('')
        }
    }

        return (
            <div className='popup'>
                <div className='popup\_inner'>
                    <h3 className='headerText text'>Add player menu </h3>
                        <div className="input-field mt2">
                        <label htmlFor="title" className="active text">name</label>
                        <input ref={name} className="text inputField" placeholder="name" onKeyPress={keyPressHandler}/>
                        </div>

                        <form action="#">
    <p>
      <label>
        <input name="group1" type="radio" checked onKeyPress={keyPressHandler} />
        <span>Red</span>
      </label>
      <label>
        <input ref={name} name="group1" type="radio" onKeyPress={keyPressHandler} />
        <span>Yellow</span>
      </label>
    </p>
  </form>
                    <div className="input-field mt2">
                        <label htmlFor="title" className="active text">comment</label>
                        <input ref={comment}className="text inputField" placeholder="comment" onKeyPress={keyPressHandler} />
                        </div>
                    <div className="button">
                        <Button {...addButton} ></Button>
                    </div>
                    <div className="button">
                        <Button {...closeButton} ></Button>
                    </div>
                </div>
            </div>
        );
}