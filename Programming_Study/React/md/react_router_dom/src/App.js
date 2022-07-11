import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Articles from './components/Articles';
import Article from './components/Article';
import Layout from './Layout';
import NotFound from './components/NotFound';
import Login from './components/Login';
import MyPage from './components/MyPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profiles/:username" element={<Profile />} />
        </Route>
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/mypage' element={<MyPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;