import './App.css';
import { Router } from '@reach/router';
// importing components
import Header from './components/Header';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import PostOpinion from './components/PostOpinion';
import Profile from './components/Profile';
import OpinionDetail from './components/OpinionDetail';
import PostRefute from './components/PostRefute';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <RegisterForm path="/" />
        <LoginForm path="/login" />
        <Home path="/home" />
        <PostOpinion path="/post" />
        <Profile path="/profile" />
        <OpinionDetail path="/opinions/:id" />
        <PostRefute path="/refute/:id" />
      </Router>
    </div>
  );
}

export default App;
