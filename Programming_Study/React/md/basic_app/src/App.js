import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count: 0
  };

  handleChange = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div className='App'>
        <h3>index Props</h3>
        <div className='props'>
          <span>{this.props.message}</span>
        </div>

        <h3>State</h3>
        <div className='state'>
          <div>{this.state.count}</div>
          <button onClick={this.handleChange}>count up!</button>
        </div>

        <h3>App Props</h3>
        <div className='inside-app-props'>
          <InsideApp
            count={this.state.count}
            handleChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

class InsideApp extends Component {
  render() {
    return(
      <div>
        {this.props.count}
        <button onClick={this.props.handleChange}>click me!</button>
      </div>
    )
  }
}