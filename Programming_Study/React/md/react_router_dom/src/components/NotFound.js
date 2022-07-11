import React, { Component } from 'react'

export default class NotFound extends Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 64,
        position: 'absolute',
        width: '100%',
        height: '100%'
      }}>
        404
      </div>
    )
  }
}
