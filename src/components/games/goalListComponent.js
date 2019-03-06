import React, { Component } from 'react';
import {CollectionItem} from 'react-materialize'

export default function GoalsList(props){

    return props.goals.map(goal => {
        return (
        <div key={goal.id}>
            <CollectionItem s={8}>hole: {goal.hole} period: {goal.period}
            <a href="#" className="secondary-content" onClick={(event) => {
              event.preventDefault()
              props.deleteGoal(goal.id, props.game.home_bool)}}>
            <i className="material-icons">delete</i></a></CollectionItem>
          <hr/>
        </div>
      )
      }
    )
}
