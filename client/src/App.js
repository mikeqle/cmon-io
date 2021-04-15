import './App.css';
import { Router } from '@reach/router';
// importing components
import Header from './components/Header';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <RegisterForm path="/" />
        <LoginForm path="/login" />
        <Home path="/home" />
      </Router>
    </div>
  );
}

export default App;
