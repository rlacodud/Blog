import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>가장 먼저 보여지는 페이지입니다.</p>
        <ul>
          <li>
            <Link to="/about">소개</Link>
          </li>
          <li>
            <Link to="/profiles/dong">강동원의 프로필</Link>
          </li>
          <li>
            <Link to="/profiles/gil">홍길동의 프로필</Link>
          </li>
          <li>
            <Link to="/profiles/void">존재하지 않는 프로필</Link>
          </li>
        </ul>
      </div>
    )
  }
}