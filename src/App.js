// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home'
import Elections from './components/Elections'
import Profile from './components/Profile'
import About from './components/About'
import Form from './components/Form';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Form /> */}
      <Router>
          <Header />
          <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/elections' element={<Elections />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/about' element={<About />} />
            <Route path='/sign_up' element={<Form />} />
            <Route path='*' element={<Home />} />
          </Routes>
    </Router>
    </div>
  );
}

export default App;
