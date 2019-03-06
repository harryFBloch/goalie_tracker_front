import React, { Component } from 'react';
import {Collection, Row, Col} from 'react-materialize'
import {GameCollectionComponent} from './gameCollectionComponent'

export default class GamesListComponent extends Component {
  constructor(){
    super()
    this.state = {games: [], searchString: ""}
  }

  componentDidMount(){
    fetch('http://localhost:3000/games')
    .then(resp => resp.json())
    .then(data => this.setState({games: data}))
  }

  render(){
    console.log(this.state)
    const gamesList = this.state.games.map(game =><GameCollectionComponent game={game}/>)
    return (
        <Row>
          <Col s={12}>
            <Collection>
              {gamesList}
            </Collection>
          </Col>
        </Row>
    )
  }
}
