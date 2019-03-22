import React, { Component } from 'react';
import {CollectionItem, Button} from 'react-materialize'

export class GameCollectionComponent extends Component {


render(){
  let date = this.props.game.date.split("T")[0]
  return(
    <CollectionItem>{this.props.game.goalie.team} vs {this.props.game.opposing_team} period: {this.props.game.period} date: {date} </CollectionItem>
  )
}
}
