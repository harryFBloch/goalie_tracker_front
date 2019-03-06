// import {dispatch, getState} from 'react-redux'


export function getGames(gameId){
  return (dispatch,getState) => {
    return dispatch(getHomeGame(gameId)).then((resp) => {
      let awayGameId = resp.homeGame.oppsoing_game_id
      return dispatch(getAwayGame(awayGameId)).then(() => {
        return dispatch({type: "GAMES_LOADED"})
      })
    })
  }
}

export function createGame(game, homeBool) {
  game.homeBool = homeBool
  return (dispatch) => {
    dispatch({type: "START_CREATING_GAMES"})
    return fetch('http://localhost:3000/games',{
      method: "post",
      body: JSON.stringify(game)
    })
    .then(resp => resp.json())
    .then(data => {
      return dispatch({type: "CREATE_GAMES_SUCCESS", game: data})
  })
  }
}

export function getHomeGame(gameId) {
  return (dispatch) => {
    dispatch({type: 'START_GETTING_HOME_GAME'})
    return fetch(`http://localhost:3000/games/${gameId}`)
    .then(resp => resp.json())
    .then(homeGame => dispatch({type: "GET_HOME_GAME_SUCCESS", homeGame}))
  }
}

export function getAwayGame(gameId) {
  return (dispatch) => {
    dispatch({type: 'START_GETTING_AWAY_GAME'})
    return fetch(`http://localhost:3000/games/${gameId}`)
    .then(resp => resp.json())
    .then(awayGame => dispatch({type: "GET_AWAY_GAME_SUCCESS", awayGame}))
  }
}

export function newBlock(pad, game){
  return (dispatch) => {
      dispatch({type: 'START_NEW_BLOCK'})
      return fetch(`http://localhost:3000/blocks`,{
      method: "post",
      body: JSON.stringify({pad: pad, period: game.period, goalie_id: game.goalie_id, game_id: game.id}),
    })
    .then(resp => resp.json())
    .then(data => dispatch({type: "SUCCESS_NEW_BLOCK", save: data, home_bool: game.home_bool}))
  }
}

export function newGoal(hole, game){
  return (dispatch) => {
      dispatch({type: 'START_NEW_GOAL'})
      return fetch(`http://localhost:3000/goals`,{
      method: "post",
      body: JSON.stringify({hole: hole, period: game.period, goalie_id: game.goalie_id, game_id: game.id}),
    })
    .then(resp => resp.json())
    .then(data => dispatch({type: "SUCCESS_NEW_GOAL", goal: data, home_bool: game.home_bool}))
  }
}

export function updateGame(game){
  return (dispatch) => {
    dispatch({type: 'START_UPDATING_GAME'})
    return fetch(`http://localhost:3000/games/${game.id}`,{
      method: "PATCH",
      body: JSON.stringify({game: game}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => resp.json())
    .then(data => dispatch({type: "SUCCESS_UPDATE_GAME", game: data}))
  }
}

export function deleteGoal(goalId, homeBool){
  return (dispatch) => {
    dispatch({type: 'START_DELETING_GOAL'})
    return fetch(`http://localhost:3000/goals/${goalId}`,{
      method: "delete"
    })
    .then(resp => resp.json())
    .then(data => dispatch({type: "SUCCESS_DELETING_GOAL", goalId: goalId, homeBool: homeBool}))

  }
}

export function deleteBlock(blockId, homeBool){
  return (dispatch) => {
    dispatch({type: 'START_DELETING_GOAL'})
    return fetch(`http://localhost:3000/blocks/${blockId}`,{
      method: "delete"
    })
    .then(resp => resp.json())
    .then(data => dispatch({type: "SUCCESS_DELETING_BLOCK", blockId: blockId, homeBool: homeBool}))
  }
}
