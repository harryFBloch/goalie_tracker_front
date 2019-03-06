import React, { Component } from 'react';
import { Col, Row} from 'react-materialize'

export default class GoalieInputComponent extends Component {

  constructor(props){
    super(props)
    this.state = {game: props.game}
  }

   componentDidUpdate(prevProps){
     if (this.props.game !== prevProps.game){
       this.setState({game: this.props.game})
     }
  }


  fireIncrement = (upBool,key) => {
    let tempState = this.state
    if (upBool){
      tempState.game[key] ++
    }else{
      tempState.game[key] --
    }
    this.props.updateGame(tempState.game)
    this.setState(tempState)
  }


  render(){
    const style = {width: "20px", height: "20px", "textAlign": "center"}
    return (
    <>
      <Row>
        <Col s={6} l={3}>
          <label>Cons Saves: </label>
          <input type="button" value="-" field="quantity" onClick={() => this.fireIncrement(false, "cons_saves")}/>
          <input type="text" name="quantity" value={this.state.game.cons_saves} style={style}/>
          <input type="button" value="+" field="quantity" onClick={() => this.fireIncrement(true, "cons_saves")}/>
        </Col>
        <Col s={6} l={3}>
          <label>Left Crease: </label>
          <input type="button" value="-" field="quantity" onClick={() => this.fireIncrement(false, "left_crease")}/>
          <input type="text" name="quantity" value={this.state.game.left_crease} style={style}/>
          <input type="button" value="+" field="quantity" onClick={() => this.fireIncrement(true, "left_crease")}/>
        </Col>

        <Col s={6} l={3}>
          <label>Pass: </label>
          <input type="button" value="-" field="quantity" onClick={() => this.fireIncrement(false, "pass")}/>
          <input type="text" name="quantity" value={this.state.game.pass} style={style}/>
          <input type="button" value="+" field="quantity" onClick={() => this.fireIncrement(true, "pass")}/>
        </Col>

        <Col s={6} l={3}>
          <label>Waved Icing: </label>
          <input type="button" value="-" field="quantity" onClick={() => this.fireIncrement(false, "waved_icing")}/>
          <input type="text" name="quantity" value={this.state.game.waved_icing} style={style}/>
          <input type="button" value="+" field="quantity" onClick={() => this.fireIncrement(true, "waved_icing")}/>
        </Col>

      </Row>
    </>
    )
  }
}
