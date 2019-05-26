import React, { Component } from 'react'
import './Jupiter.scss'
import jupiterImg from './Jupiter.jpg'

export default class Jupiter extends Component {
  render() {
    return (
      <div className="planet jupiter">
        <img
          src={jupiterImg}
          alt="Jupiter"
        />
      </div>
    )
  }
}
