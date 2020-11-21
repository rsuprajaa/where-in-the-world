import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom'
//COMPONENTS
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CountryDetail from './pages/CountryDetail'
//styles
import './styles/index.scss'

function App() {
  
  const getMode = () => {
    const mode = JSON.parse(localStorage.getItem('mode'))
    return mode || false
  }
  const [darkmode, setDarkMode] = useState(getMode())
  useEffect(() => {
    localStorage.setItem('mode', JSON.stringify(darkmode))
  }, [darkmode])
  return (
    <div className={`App ${darkmode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar darkmode={darkmode} setDarkMode={setDarkMode}/>
      <Switch>
        <Route exact path ='/'>
          <Home darkmode={darkmode}/>
        </Route>
        <Route exact path ='/countries/:id'>
          <CountryDetail darkmode={darkmode}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
