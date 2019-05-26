import React, { Component } from 'react'
import './Earth.scss'
import earthImg from './Earth.jpg'

export default class Earth extends Component {
  render() {
    return (
      <div className="planet earth">
        <img
          src={earthImg}
          alt="Earth"
        />
      </div>
    )
  }
}
