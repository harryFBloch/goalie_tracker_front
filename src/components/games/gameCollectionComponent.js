import React, { Component } from 'react';
import {CollectionItem} from 'react-materialize'

export const GameCollectionComponent = ({game}) => {
  let date = game.date.split("T")[0]
  return(
    <CollectionItem href={`/games/${game.id}`}
      >{game.goalie.team} vs {game.opposing_team} period: {game.period} date: {date}</CollectionItem>
  )
}
