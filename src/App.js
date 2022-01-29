import './App.css';
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import MyProjects from './components/myProjects/MyProjects'

function App() {
  return (
    <div className="App">
      <NavBar /><br>
      <Home /><br>
      <About /><br>
      <Skills /><br>
      <MyProjects /><br>
      <Contact />
    </div>
  );
}

export default App;
