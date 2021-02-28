import React from 'react';
import {Navbar} from './components/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MainPageBanner from './static/nhl_main.jpg'
import {PlayerTablePage} from './pages/PlayerTablePage'
import {PlayerListPage} from './pages/PlayerListPage'
import {PlayerDataPopup} from './components/PlayerDataPopup'

export const App: React.FC =() => {
  return (
    <div className="inner_banner" style={{  
      backgroundImage: "url(" + MainPageBanner + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: "100vh",
      overflow: "scroll"
    }}>
    <BrowserRouter >
      <Navbar />
      <div className="container margin_zero">
        <Switch>
          <Route component={PlayerDataPopup} path="/add/player" exact />
          <Route component={PlayerListPage} path="/" exact />
          <Route component={PlayerTablePage} path="/table"/>
        </Switch>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
