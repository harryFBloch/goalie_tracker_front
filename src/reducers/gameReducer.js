

export default function manageGames(state = {gamesLoaded: false, home: {}, away: {}}, action){
  switch(action.type) {
    case "UN_LOAD_GAMES":
      return {...state, gamesLoaded: false}
    case "GAMES_LOADED":
      return {...state, gamesLoaded: true}
    case "START_GETTING_HOME_GAME":
      return state
    case "GET_HOME_GAME_SUCCESS":
      return {...state, home: action.homeGame}
    case "START_GETTING_AWAY_GAME":
        return state
    case "GET_AWAY_GAME_SUCCESS":
        return {...state, away: action.awayGame}
    case "START_NEW_BLOCK":
      return state
    case "SUCCESS_NEW_BLOCK":
      if (action.home_bool){
        let tempHome = state.home
        tempHome.blocks.push(action.save)
        return {...state, home:tempHome}
      }else{
        let tempAway = state.away
        tempAway.blocks.push(action.save)
        return {...state, away:tempAway}
      }
      case "START_NEW_GOAL":
        return state
      case "SUCCESS_NEW_GOAL":
        if (action.home_bool){
          let tempHome = state.home
          tempHome.goals.push(action.goal)
          return {...state, home:tempHome}
        }else{
          let tempAway = state.away
          tempAway.goals.push(action.goal)
          return {...state, away:tempAway}
        }
      case "START_UPDATING_GAME":
        return state
      case "SUCCESS_UPDATE_GAME":
        if(action.game.home_bool){
          return {...state, home: action.game}
        }else{
          return {...state, away: action.game}
        }
      case "SUCCESS_DELETING_GOAL":
        if(action.homeBool){
          return {...state, home: {...state.home, goals: state.home.goals.filter(goal => goal.id !== action.goalId)}}
        }else{
          return {...state, away: {...state.away, goals: state.away.goals.filter(goal => goal.id !== action.goalId)}}
        }
      case "SUCCESS_DELETING_BLOCK":
          if(action.homeBool){
            return {...state, home: {...state.home, blocks: state.home.blocks.filter(block => block.id !== action.blockId)}}
          }else{
            return {...state, away: {...state.away, blocks: state.away.blocks.filter(block => block.id !== action.blockId)}}
          }
    default:
      return state
  }
}
