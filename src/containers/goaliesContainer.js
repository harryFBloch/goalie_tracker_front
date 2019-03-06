import React, { Component } from 'react';
import GoalieTableInputComponent from '../components/goalies/goalieTableComponent'
import {Route} from 'react-router'

class GoaliesContainer extends Component {
  render(){
    return(
      <>
        <Route exact path="/goalies" component={GoalieTableInputComponent}/>
      </>
    )
  }
}

export default GoaliesContainer
