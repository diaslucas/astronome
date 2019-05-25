import React, { Component } from 'react'
import './Universe.scss'
import Sun from '../Sun/Sun'
import Mercury from '../Mercury/Mercury'
import Venus from '../Venus/Venus'
import Earth from '../Earth/Earth'
import Mars from '../Mars/Mars';
import Jupiter from '../Jupiter/Jupiter';
import Saturn from '../Saturn/Saturn';
import Uranus from '../Uranus/Uranus';
import Neptune from '../Neptune/Neptune';

export default class Universe extends Component {
  render() {
    return (
      <div className="universe">
        <Sun />
        <Mercury />
        <Venus />
        <Earth />
        <Mars />
        <Jupiter />
        <Saturn />
        <Uranus />
        <Neptune />
      </div>
    )
  }
}
