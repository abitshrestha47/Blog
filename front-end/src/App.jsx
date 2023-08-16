import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css'
import Container from './components/Container'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/homecomponents/Home'
import About from './components/homecomponents/About'
import Contact from './components/homecomponents/Contact'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Container/>}>
            <Route path='/' element={<Home/>}/>
            <Route path="/about" element={<About />} />
            <Route path='/contact' element={<Contact/>}/>
          </Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
    </>
  )
} 

export default App
