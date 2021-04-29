import NavBar from './component/navBar';
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './component/Screen/Home'
import SignIn from './component/Screen/SignIn'
import SignUp from './component/Screen/SignUp'
import Profile from './component/Screen/profile'
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path='/'>
        <Home></Home>
      </Route>
      <Route path='/signup'>
        <SignUp></SignUp>
      </Route>
      <Route path='/signin'>
        <SignIn></SignIn>
      </Route>
      <Route path='/profile'>
        <Profile></Profile>
      </Route>
    </BrowserRouter>

  );
}

export default App;
