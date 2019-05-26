import React, { Component } from 'react'
import './Neptune.scss'
import neptuneImg from './Neptune.jpg'

export default class Neptune extends Component {
  render() {
    return (
      <div className="planet neptune">
        <img
          src={neptuneImg}
          alt="Neptune"
        />
      </div>
    )
  }
}
