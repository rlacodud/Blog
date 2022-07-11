import React, { Component } from 'react';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';

export default class App extends Component {
  state = {number:0}
  render() {
    return (
      <div>
        <h1>Root</h1>
        <AddNumberRoot/>
        <DisplayNumberRoot/>
      </div>
    )
  }
}