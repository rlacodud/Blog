import React, { Component } from 'react';

export default class Mynav extends Component {
  shouldComponentUpdate(newProps, newState) {
    console.log(
      'shouldComponentUpdate 작동',
      newProps.data, // 새값(현재값)
      this.props.data // 기존값
    );
    if(newProps.data === this.props.data) {
      return false;
    }
    return true;
  }
  render() {
    console.log('Mynav.js 실행됨');
    var lists = [];
    var data = this.props.data;

    var i = 0;
    while(i < data.length) {
      // 배열을 사용할 때에는 각 key를 설정해줘야 함.(오류X | warning)
      lists.push(<li key = {data[i].id}>
        <a href= ''
          data-id = {data[i].id}
          onClick = {
            function(e) {
              e.preventDefault();
              // this.props.onChangePage(e.target.getAttribute('data-id'));
              // 속성명이 data로 시작되는 것은 아래와 같이도 작성 가능.
              this.props.onChangePage(e.target.dataset.id);
          }.bind(this)
        }
        >{data[i].title}</a></li>);
      i += 1;
    }

    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    )
  }
}