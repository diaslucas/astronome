import React, { Component } from 'react'
import './Universe.scss'
import Sun from '../Sun/Sun';

export default class Universe extends Component {
  render() {
    return (
      <div className="universe">
        <Sun />
      </div>
    )
  }
}
