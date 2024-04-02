import {userState} from 'react'
import Sidenav from './components/sidenav'
import Header from './components/main'
import Resume from './components/resume'
import Portfolio from "./components/portfolio"
import Contact from "./components/contact"
import About from "./components/about"
import './App.css'

function App() {
  return (
    <div>
      <Sidenav />
      <Header /> 
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
