import React, { Component } from 'react'
import './Universe.scss'
import MilkyWay from '../MilkyWay/MilkyWay';

export default class Universe extends Component {
  render() {
    return (
      <div className="universe">
        <MilkyWay />
      </div>
    )
  }
}
