import React, { Component } from 'react'
import './Mars.scss'
import marsImg from './Mars.jpg'

export default class Mars extends Component {
  render() {
    return (
      <div className="planet mars">
        <img
          src={marsImg}
          alt="Mars"
        />
      </div>
    )
  }
}
