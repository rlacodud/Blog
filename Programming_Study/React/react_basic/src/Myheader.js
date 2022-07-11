import React, { Component } from 'react';

export default class Myheader extends Component {
  render() {
    console.log('Myheader.js 실행됨');
    return (
      <header>
        <h1 className = 'logo'>
          <a href='' onClick = {function(e) {
            e.preventDefault();
            // 단일값을 불러올 때와 함수를 불러올 때의 방식은 다름.
            this.props.onChangePage();
            console.log(this);
          }.bind(this)
        }
          
          >{this.props.title}</a>
        </h1>
        <p>{this.props.desc}</p>
      </header>
    )
  }
}