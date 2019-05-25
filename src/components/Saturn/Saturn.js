import React, { Component } from 'react'
import './Saturn.scss'
import saturnImg from './Saturn.jpg'

export default class Saturn extends Component {
  render() {
    return (
      <div className="saturn">
        <img
          src={saturnImg}
          alt="Saturn"
        />
      </div>
    )
  }
}
