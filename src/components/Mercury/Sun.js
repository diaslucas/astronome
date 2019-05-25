import React, { Component } from 'react'
import './Sun.scss'
import sunImg from './Sun.jpg'

export default class Sun extends Component {
  render() {
    return (
      <div className="sun">
        <img
          src={sunImg}
          alt="Sun"
        />
      </div>
    )
  }
}
