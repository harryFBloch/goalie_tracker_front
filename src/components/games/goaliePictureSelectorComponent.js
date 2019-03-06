import React, { Component } from 'react'
import goalieHome from '../../goalie-holes.png'
import goalieAway from '../../goalie-holes-away.png'


export default class GoaliePictureSelectorComponent extends Component {

  fireGoal = event => {
    console.log(this.props)
    let x = event.pageX - event.currentTarget.offsetLeft
    let y = event.pageY - event.currentTarget.offsetTop
    let goalOrSave = pictureClickArray.map(range => {
      if (this.inRange(x, range.minX, range.maxX) && this.inRange(y, range.minY, range.maxY)){
        range.goal ? this.props.newGoal(range.hole, this.props.game) : this.props.newBlock(range.pad, this.props.game)
      }
    })
  }

  inRange = (x, min, max) => {
      return x >= min && x <= max
  }

  homeOrAwayImage = (homeBool) => {
    return (homeBool ? goalieHome : goalieAway)
  }

  render(){
    const style = {width: 350, height: 350}
    return(
      <img src={this.homeOrAwayImage(this.props.homeBool)} onClick={this.fireGoal} style={style} alt="goalie"/>
    )
  }
}

const pictureClickArray = [
  {minX: 250, maxX: 290, minY: 70 ,maxY: 120, goal: true, hole: "1"},
  {minX: 250, maxX: 300, minY: 210 ,maxY: 270, goal: true, hole: "2"},
  {minX: 70, maxX: 100, minY: 70 ,maxY: 120, goal: true, hole: "3"},
  {minX: 60, maxX: 95 ,minY: 215 ,maxY: 260, goal: true, hole: "4"},
  {minX: 164, maxX: 188, minY: 220 ,maxY: 270, goal: true, hole: "5"},
  {minX: 108, maxX: 146, minY: 138 ,maxY: 211, goal: false, pad: "Blocker"},
  {minX: 212, maxX: 242, minY: 136 ,maxY: 190, goal: false, pad: "Glove"},
  {minX: 153, maxX: 210, minY: 282 ,maxY: 294, goal: false, pad: "Stick"},
  {minX: 115, maxX: 155, minY: 219 ,maxY: 270, goal: false, pad: "Right Leg"},
  {minX: 190, maxX: 250, minY: 197 ,maxY: 277, goal: false, pad: "Left Leg"},
  {minX: 137, maxX: 212, minY: 100 ,maxY: 144, goal: false, pad: "Chest"},
]
