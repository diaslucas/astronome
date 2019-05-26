import React, { Component } from 'react'
import './Uranus.scss'
import uranusImg from './Uranus.jpg'

export default class Uranus extends Component {
  render() {
    return (
      <div className="planet uranus">
        <img
          src={uranusImg}
          alt="Uranus"
        />
      </div>
    )
  }
}
