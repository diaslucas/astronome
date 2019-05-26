import React, { Component } from 'react'
import './Venus.scss'
import venusImg from './Venus.jpg'

export default class Venus extends Component {
  render() {
    return (
      <div className="planet venus">
        <img
          src={venusImg}
          alt="Venus"
        />
      </div>
    )
  }
}
