// 꼭 필요한 코드
import React from 'react';
import ReactDOM from 'react-dom';
// 꼭 필요한 코드
import './index.css';
// 소스에서 확장자 생략 -> 같은 파일 내 js를 참조한다는 의미
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* = <APP></APP> = component APP.js의 결과 출력 */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
