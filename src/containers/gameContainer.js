import React, { Component } from 'react';
import NewGameComponent from '../components/games/newGameComponent'
import { BrowserRouter as Router, Route , Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import ShowGameContainer from './showGameContainer'

class GameContainer extends Component {

  loadShowPage = (gameId) => {
    this.props.history.push(`/games/${gameId}`)
  }

  render(){
  return (
    <>
      <Route exact path={this.props.match.url} render={props => <NewGameComponent {...props} loadShowPage={this.loadShowPage}/>}/>
      <Route path={this.props.match.url + "/:gameID"} render={props => <ShowGameContainer {...props}/>}/>
    </>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(GameContainer)
