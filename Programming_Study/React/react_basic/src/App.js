// rcc
import React, { Component } from 'react';
import './App.css';
import Myheader from './Myheader';
import Mynav from './Mynav';
import Myarticle from './Myarticle';
import Controls from './Controls';
import CreateArticle from './CreateArticle';
import ReadArticle from './ReadArticle';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.current_id = 3;
    // 해당 값들을 바꾸기 위해서는 state함수를 이용해야 가능.
    this.state = {
      mode: 'welcome',
      selected_id: 2,
      subject: {title: 'React', desc: 'Single Page Application'},
      welcome: {title: 'Welcome', desc: 'Welcome to React'},
      menus: [
        {id: 1, title: 'HTML', desc: 'Hypertext Markup Language'},
        {id: 2, title: 'CSS', desc: 'CSS is for design'},
        {id: 3, title: 'Javascript', desc: 'Javascript is for interactive'}
      ]
    }
  }
  // constructor는 render 바로 위에 있어야 함
  render() {
    console.log('App.js 실행됨');
    var _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <Myarticle title = {_title} desc = {_desc}/>;
    } else if (this.state.mode === 'read') {
        // 반복문..사용자가 클릭한 그 요소의 data-id값이 menus의 각 항목들에 있는지
        var i = 0;
        while (i < this.state.menus.length) {
          var data = this.state.menus[i];
          if(data.id === this.state.selected_id) {
            _title = data.title;
            _desc = data.desc;
            break;
          }
          i++;
        } 
        // _title = this.state.menus[0].title;
        // _desc = this.state.menus[0].desc;
    } else if(this.state.mode === 'create') {

      _article = <CreateArticle
        onSubmit = {function (_title, _desc) {
          this.current_id += 1;
          // 변경
          // 기존값과 현재값을 구분하기 위해 push가 아닌, concat을 이용함
          // this.state.menus.push(
          //   {id: this.current_id, title: _title, desc: _desc}
          // );
          var _menus = this.state.menus.concat(
            {id: this.current_id, title: _title, desc: _desc}
          )
          // 반영
          this.setState({
            menus: _menus
          })
      }.bind(this)}/>;
    } else if(this.state.mode === 'update') {
      _article = <ReadArticle/>;
    }

    return (
      <div className = 'App'>
        <Myheader
          title = {this.state.subject.title}
          desc = {this.state.subject.desc}
          onChangePage = {
            function() {
              this.setState({
                mode: 'welcome'
              });
            }.bind(this)
          }
        />
        <Mynav
          data = {this.state.menus}
          onChangePage = {
            function(id) {
              // 해당 부분에서 멈춰주고 커서로 id를 가리키면 id의 값 확인 가능.
              // debugger;
              this.setState({
                mode: 'read',
                selected_id: Number(id)
              });
            }.bind(this)
          }/>

        {_article}

        <Controls
          onChangePage = {
            function(_mode) {
              this.setState({
                mode: _mode
              });
            }.bind(this)
        }></Controls>
      </div>
    )
  }
}
// export default App; 