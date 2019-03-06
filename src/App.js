import React, { Component } from 'react';
import './App.css';
import NavBarComponent from './components/navBarComponent'
import GameContainer from './containers/gameContainer'
import {Container} from 'react-materialize'
import {Route} from 'react-router'
import GoaliesContainer from './containers/goaliesContainer'
import GamesListComponent from './components/games/gamesListComponent'

class App extends Component {

render(){
  return (
    <div className="app">
      <NavBarComponent />
      <Container>
        <Route path="/games" component={GameContainer} />
        <Route path="/goalies" component={GoaliesContainer}/>
        <Route path="/gameslist" component={GamesListComponent}/>
      </Container>
    </div>
)
}

}

export default App;
