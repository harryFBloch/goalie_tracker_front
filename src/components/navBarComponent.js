import React, { Component } from 'react';
import { Navbar, NavItem} from 'react-materialize'
import {NavLink} from 'react-router-dom'

export default class NavBarComponent extends Component {

    render(){
      return (
        <Navbar brand='Goalie Tracker' right >
          <li><NavLink to="/games">New Game</NavLink></li>
          <li><NavLink to="/goalies">Goalies</NavLink></li>
          <li><NavLink to="/gameslist">Games</NavLink></li>

        </Navbar>
      )
    }
}
