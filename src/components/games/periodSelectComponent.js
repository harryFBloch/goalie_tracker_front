import React, { Component } from 'react';
import { Col, Input} from 'react-materialize'

export default function PeriodSelectComponent(props) {

    return(
      <Col s={4}>
        <Input type='select' label="Period" value={props.period} onChange={props.updatePeriod}>
          <option value='1'>First</option>
          <option value='2'>Second</option>
          <option value='3'>Third</option>
        </Input>
      </Col>
    )
}
