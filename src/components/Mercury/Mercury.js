import React, { Component } from 'react'
import './Mercury.scss'
import mercuryImg from './Mercury.jpg'

export default class Mercury extends Component {
  render() {
    return (
      <div className="mercury">
        <img
          src={mercuryImg}
          alt="Mercury"
        />
      </div>
    )
  }
}
