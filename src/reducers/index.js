import { combineReducers } from "redux"
import manageGames from './gameReducer'

export const rootReducer = combineReducers({
  games: manageGames
})
