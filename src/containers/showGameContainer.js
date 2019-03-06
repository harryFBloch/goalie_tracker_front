import React, { Component } from 'react';
import {Row, Col, Collection, Button} from 'react-materialize'
import {connect} from 'react-redux'
import GoalsList from '../components/games/goalListComponent'
import SaveList from '../components/games/saveListComponent'
import GoalieInputComponent from '../components/games/goalieInputComponent'
import PeriodSelectComponent from '../components/games/periodSelectComponent'
import GoaliePictureSelectorComponent from '../components/games/goaliePictureSelectorComponent'
import { getGames, newBlock, newGoal, updateGame, deleteGoal, deleteBlock} from '../actions/gameActions'

class ShowGameContainer extends Component {

  constructor(props){
    super(props)
    this.state = {showingHomeGame: true}
  }

  componentDidMount(){
    this.props.getGames(this.props.match.params.gameID)
  }

  updatePeriod = (event) => {
    let game = this.showHomeOrAway()
    game.period = event.target.value
    this.props.updateGame(game)
  }

  homeOrAwayString = home_bool => {
    return (home_bool ? "Home Team" : "Away Team")
  }

  showHomeOrAway = () => {
    return (this.state.showingHomeGame ? this.props.games.home : this.props.games.away)
  }

  fireHomeAwayButton = (event) => {
    this.props.history.push(`/games/${this.showHomeOrAway().oppsoing_game_id}`)
    this.setState({showingHomeGame: !this.state.showingHomeGame})

  }

  gameComponents = () => {
    if (this.props.games.gamesLoaded){
      const game = this.showHomeOrAway()
      return (
        <div>

          <h4>{this.homeOrAwayString(game.home_bool)}</h4>
          <h5>{game.goalie.first_name} {game.goalie.last_name}</h5>
          <GoaliePictureSelectorComponent newBlock={this.props.newBlock} newGoal={this.props.newGoal} game={game} homeBool={game.home_bool}/>
          <Row>
            <Col s={8} offset="s2">
              <PeriodSelectComponent updatePeriod={this.updatePeriod} period={game.period}/>
              <Button waves='light' onClick={() => this.fireHomeAwayButton()}>{this.homeOrAwayString(!game.home_bool)}</Button>
            </Col>
          </Row>
            <GoalieInputComponent game={game} updateGame={this.props.updateGame}/>

          <Row s={12}>
            <Col s={6}>
              <h5>Goals</h5>
              <Collection className="goals">
                <GoalsList goals={game.goals} deleteGoal={this.props.deleteGoal} game={game}/>
              </Collection>
            </Col>

            <Col s={6}>
              <h5>Saves</h5>
              <Collection className="saves">
                <SaveList saves={game.blocks} deleteSave={this.props.deleteBlock} game={game}/>
              </Collection>
            </Col>

          </Row>
        </div>
      )
    }
  }

  render(){
    return (
      <Row>
        <Col className="center-align" s={12}>
        {this.gameComponents()}
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, {newBlock, newGoal, getGames, updateGame, deleteGoal, deleteBlock})(ShowGameContainer)
