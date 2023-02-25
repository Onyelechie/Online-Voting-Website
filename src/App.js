// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home'
import Elections from './components/Elections'
import Profile from './components/Profile'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
					<Routes>
						<Route path='/' index element={<Home />} />
						<Route path='/elections' element={<Elections />} />
						<Route path='/profile' element={<Profile />} />
						<Route path='/about' element={<About />} />
						<Route path='*' element={<Home />} />
					</Routes>
				</Router>
    </div>
  );
}

export default App;
