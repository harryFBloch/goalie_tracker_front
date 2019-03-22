import React, { Component } from 'react';
import {Row, Input, Button, Col} from 'react-materialize'
import {createGame} from '../../actions/gameActions'
import {connect} from 'react-redux'

class NewGameComponent extends Component {
  constructor(){
    super()
    this.state = {
      homeGoalieFirst: "",
      homeGoalieLast: "",
      homeTeam: "",
      awayGoalieFirst: "",
      awayGoalieLast: "",
      awayTeam: "",
      date: "",
      formValid: false,
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  fire = (event) => {
    if (this.isFormValid()){
      event.preventDefault()
      let games = this.formatGames(this.state)
      this.props.createGame(games, this.props.history)

      // fetch('http://localhost:3000/games',{
      //   method: "post",
      //   body: JSON.stringify(games)
      // })
    //   .then(resp => resp.json())
    //   .then(data => {
    //     this.props.loadShowPage(data.games.home.id)
    // })
  }
  }

  isFormValid = () => {
    if (this.state.homeGoalieFirst === "" ||
    this.state.homeGoalieLast === "" ||
    this.state.homeTeam === "" ||
    this.state.awayGoalieFirst === "" ||
    this.state.awayGoalieLast === "" ||
    this.state.awayTeam === "" ||
    this.state.date === ""){
      window.Materialize.toast('Error! Fields Blank', 10000)
      return false
    }else{
      return true
    }
  }

  formatGames = games => {
    return {games:
     {
       home: {
       firstName: games.homeGoalieFirst,
       lastName: games.homeGoalieLast,
       teamName: games.homeTeam,
       date: games.date,
     },
     away:{
        firstName: games.awayGoalieFirst,
        lastName: games.awayGoalieLast,
        teamName: games.awayTeam,
        date: games.date
        }
      }
    }
  }

  render(){
    return(
      <div>
      <Row>

          <Col s={6} className="center-align">
            <h5>Home Team</h5>
            <Input name="homeGoalieFirst" value={this.state.homeGoalieFirst} onChange={this.handleChange} label="Goalie First Name" s={12}/>
            <Input name="homeGoalieLast" value={this.state.homeGoalieLAst} onChange={this.handleChange} label="Goalie Last Name" s={12}/>
            <Input name="homeTeam" value={this.state.homeTeam} onChange={this.handleChange} label="Team Name" s={12}/>
            <Input type='date' onChange={this.handleChange} value={this.state.date} name="date" label="Date" s={12}/>
          </Col>

          <Col s={6} className="center-align">
            <h5>Away Team</h5>
            <Input name="awayGoalieFirst" value={this.state.awayGoalieFirst} onChange={this.handleChange} label="Goalie First Name" s={12}/>
            <Input name="awayGoalieLast" value={this.state.awayGoalieLast} onChange={this.handleChange} label="Goalie Last Name" s={12}/>
            <Input name="awayTeam" value={this.state.awayTeam} onChange={this.handleChange} label="Team Name" s={12}/>
          </Col>
          </Row>

          <Row>
            <Button waves='light' onClick={this.fire} s={12} className="offset-s6">Start Game</Button>
          </Row>
          </div>
    )
  }
}

export default connect(null, {createGame})(NewGameComponent)
