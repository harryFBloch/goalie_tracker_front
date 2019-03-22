import React, { Component } from 'react';
import { Col, Row, Table, thead, tbody, Input, Button, Pagination} from 'react-materialize'
import { Link } from 'react-router-dom'
import GoaliePaginationComponent from './goalieTablePaginationComponent'

export default class GoalieTableComponent extends Component {
  constructor(){
    super()
    this.state = {goalies: [], searchString: "", selectedField: "", acending: true, activePage:1}
  }

  componentDidMount(){
    fetch('https://goalie-tracker-back.herokuapp.com/goalies')
    .then(resp => resp.json())
    .then(data => this.setState({goalies: data}))
  }

  searchGoalies = () =>{
    console.log(this.state.searchString)
    fetch(`https://goalie-tracker-back.herokuapp.com/goalies/?search_string=${this.state.searchString}`)
    .then(resp => resp.json())
    .then(data => this.setState({...this.state, goalies: data}))
  }

  sortGoalies = (field) =>{
    let tempArray = []
    let acending = this.state.acending
    if (field === this.state.selectedField){
      tempArray = this.state.goalies.sort(this.sortAcendingOrDecending(field, !acending))
      acending = !acending
    }else{
      tempArray = this.state.goalies.sort(this.sortAcendingOrDecending(field, true))
      acending = true
    }
    this.setState({...this.state, selectedField: field, goalies: tempArray , acending: acending})
  }

  sortAcendingOrDecending = (field, accending) => {
    console.log(accending, "TEST1")
    if (accending){
      return (a,b) => (a[field] > b[field]) ? -1 : ((b[field] > a[field]) ? 1 : 0)
    }else{
      return (a,b) => (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0)
    }
  }

  upOrDown = () => {
    return (this.state.acending ? "arrow_drop_up" : "arrow_drop_down")
  }

  mapTableKeys = () => {
    return (
      Object.keys(tableColumns).map(key => {
        if(key === this.state.selectedField){
          return(<th className="blue-text" onClick={() => this.sortGoalies(key)}>
          {tableColumns[key]}<i className="material-icons">{this.upOrDown()}</i></th>)
        }else{
          return(<th onClick={() => this.sortGoalies(key)}>{tableColumns[key]}</th>)
        }
      })
    )
  }

  range = () => {
    return {min: (this.state.activePage - 1) * 10,
      max: this.state.activePage * 10
    }
  }

  render(){
    const range = this.range()
    return (
      <>
      <Row>
        <Col s={12} m={6} className="valign-wrapper">
          <Input label="Search by Last Name" value={this.state.searchString} onChange={(event) => this.setState({...this.state, searchString: event.target.value})}/>
          <Button waves="light" type="submit" onClick={this.searchGoalies}>Search</Button>
        </Col>
      </Row>
      <Row>
        <Col className="align-center">
        <Pagination items={Math.round(this.state.goalies.length / 10)} activePage={this.state.activePage} maxButtons={5} onSelect={activePage => this.setState({...this.state, activePage: activePage})}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table className="striped">
            <thead>
              <tr>
                {this.mapTableKeys()}
              </tr>
            </thead>
            <tbody>
              {this.state.goalies.slice(range.min, range.max).map(goalie => {
                return(
                <GoaliePaginationComponent goalie={goalie} key={goalie.id}/>
                )
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
      </>
    )
  }
}

const tableColumns = {
  name: "name",
  blocks: "saves",
  goals: "goals",
  games: "games",
  cons_saves: "Cons Saves",
  left_crease: "Left Crease",
  pass: "pass",
  waved_icing: "Waved Icing",
  left_leg: "LL",
  right_leg: "RL",
  blocker: "Blocker",
  glove: "Glove",
  stick: "Stick",
  chest: "Chest",
  p1: "S1",
  p2: "S2",
  p3: "S3",
  gp1: "G1",
  gp2: "G2",
  gp3: "G3",
  h1: "H1",
  h2: "H2",
  h3: "H3",
  h4: "H4",
  h5: "H5"
}
