import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
