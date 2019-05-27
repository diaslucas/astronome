import React, { Component } from 'react'
import './MilkyWay.scss'
import { Animated } from 'react-animated-css'

import Sun from '../Sun/Sun'
import Mercury from '../Mercury/Mercury'
import Venus from '../Venus/Venus'
import Earth from '../Earth/Earth'
import Mars from '../Mars/Mars'
import Jupiter from '../Jupiter/Jupiter'
import Saturn from '../Saturn/Saturn'
import Uranus from '../Uranus/Uranus'
import Neptune from '../Neptune/Neptune'
import milkyWayImg from './MilkyWay.jpg'

export default class MilkyWay extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false,
      showAstros: false,
    }
  }

  handleClick() {
    this.setState({ clicked: true })
    setTimeout(() => {
      this.setState({ showAstros: true })
    }, 600);
  }

  // eslint-disable-next-line class-methods-use-this
  renderGalaxy() {
    return (
      <Animated className="astros-box" animationIn="zoomIn" animationOut="fadeOut" isVisible={this.state.showAstros}>
        <Sun />
        <Mercury />
        <Venus />
        <Earth />
        <Mars />
        <Jupiter />
        <Saturn />
        <Uranus />
        <Neptune />
      </Animated>
    )
  }

  render() {
    const { clicked, showAstros } = this.state
    if (showAstros) {
      return this.renderGalaxy()
    }
    const css = clicked ? 'galaxy-efect' : ''
    return (
      <div className={`galaxy milky-way ${css}`} onClick={() => this.handleClick()}>
        <img
          src={milkyWayImg}
          alt="MilkyWay"
        />
      </div>
    )
  }
}
