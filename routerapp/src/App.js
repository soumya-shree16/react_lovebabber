import logo from './logo.svg';
import './App.css';
import { NavLink, Route,Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Support from './component/support';
import Labs from './component/Labs';
import Notfound from './component/Notfound';
import {Link} from 'react-router-dom';
import Main from './component/Main';

function App() {
  return (
    <div className="App">

<nav>
  <ul>
    <li >
     <NavLink to="/">Home</NavLink> 
    </li>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
    <li>
     <NavLink to="/support"> support</NavLink>
    </li>
    <li>
      <NavLink to="/labs" >Labs</NavLink>
    </li>
  </ul>
</nav>
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route index element={<Home/>}/>
          <Route path="/support" element={<Support/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/labs" element={<Labs/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
