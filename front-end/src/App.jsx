import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/homecomponents/Home'
import Nav from './components/homecomponents/Nav'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {

  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
