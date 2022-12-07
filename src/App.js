import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header';
import Users from './components/user_module/users'
import Wineries from './components/winery_module/wineries'
import Bottles from './components/bottle_module/bottles'
import UpdateBottle from './components/bottle_module/update_bottle'
import CreateBottle from './components/bottle_module/create_bottle'
import CreateWinery from './components/winery_module/create_winery'
import SignUP from './components/signup'
import Login from './components/login'
import Home from './components/home'
import Profile from './components/user_module/profile'
import { useState, useEffect } from 'react'
import ProtectedRoutes from "./components/protected_routes";
import Logout from './components/logout'

function App() {
  const [user, setUser]= useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

  return (
    <div>
      <Header/>
      <Router>
          <Routes>
          <Route path="/" element={<Home user={user} loggedIn={loggedIn} currentUser={currentUser} />}  />
          <Route path='/users' element={<ProtectedRoutes><Users/></ProtectedRoutes>} />
          <Route path='/wineries' element={<ProtectedRoutes><Wineries/></ProtectedRoutes>} />
          <Route path='/bottles' element={<ProtectedRoutes><Bottles/></ProtectedRoutes>} />
          <Route path='/update_bottle' element={<ProtectedRoutes><UpdateBottle/></ProtectedRoutes>} />
          <Route path='/create_bottle' element={<ProtectedRoutes><CreateBottle/></ProtectedRoutes>} />
          <Route path='/create_winery' element={<ProtectedRoutes><CreateWinery/></ProtectedRoutes>} />
          <Route path='/signup' element={<SignUP/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/me' element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
          <Route path='/logout' element={<ProtectedRoutes><Logout /></ProtectedRoutes>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
