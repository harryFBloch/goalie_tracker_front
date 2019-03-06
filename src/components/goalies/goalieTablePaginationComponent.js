import React, { Component } from 'react';
import { Col, Row, Table, thead, tbody, Input, Button, Pagination} from 'react-materialize'
import { Link } from 'react-router-dom'


export default function GoaliePaginationComponent(props) {

    return(
      <tr>
        <td>{props.goalie.name}</td>
        <td>{props.goalie.blocks}</td>
        <td>{props.goalie.goals}</td>
        <td>{props.goalie.games}</td>
        
        <td>{props.goalie.cons_saves}</td>
        <td>{props.goalie.left_crease}</td>
        <td>{props.goalie.pass}</td>
        <td>{props.goalie.waved_icing}</td>
        <td>{props.goalie.left_leg}</td>
        <td>{props.goalie.right_leg}</td>
        <td>{props.goalie.stick}</td>
        <td>{props.goalie.chest}</td>
        <td>{props.goalie.glove}</td>
        <td>{props.goalie.blocker}</td>

        <td>{props.goalie.p1}</td>
        <td>{props.goalie.p2}</td>
        <td>{props.goalie.p3}</td>

        <td>{props.goalie.gp1}</td>
        <td>{props.goalie.gp2}</td>
        <td>{props.goalie.gp3}</td>

        <td>{props.goalie.h1}</td>
        <td>{props.goalie.h2}</td>
        <td>{props.goalie.h3}</td>
        <td>{props.goalie.h4}</td>
        <td>{props.goalie.h5}</td>
      </tr>
    )
}
