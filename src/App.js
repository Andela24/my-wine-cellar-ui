import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header';
import Wineries from './components/winery_module/wineries'
import Bottles from './components/bottle_module/bottles'
import UpdateBottle from './components/bottle_module/update_bottle'
import CreateBottle from './components/bottle_module/create_bottle'
import CreateWinery from './components/winery_module/create_winery'
import ShowWinery from "./components/winery_module/show_winery";
import ShowBottle from "./components/bottle_module/show_bottle";
import SignUP from './components/signup'
import Login from './components/login'
import Home from './components/home'
import Profile from './components/user_module/profile'
import ProtectedRoutes from "./components/protected_routes";
import Logout from './components/logout'
import { UserProvider } from "./context/user_context";
import AllWineries from "./components/winery_module/all_wineries";

function App() {  
  return (
    <UserProvider>
      <Router>
      <Header/>
          <Routes>
          <Route path="/" element={<Home  />}  />
          <Route path='/wineries' element={<ProtectedRoutes><Wineries/></ProtectedRoutes>} />
          <Route path='/all_wineries' element={<ProtectedRoutes><AllWineries/></ProtectedRoutes>} />
          <Route path='/bottles' element={<ProtectedRoutes><Bottles/></ProtectedRoutes>} />
          <Route path='/update_bottle/:id' element={<ProtectedRoutes><UpdateBottle/></ProtectedRoutes>} />
          <Route path='/create_bottle' element={<ProtectedRoutes><CreateBottle/></ProtectedRoutes>} />
          <Route path='/wineries/:winery_id/bottles/:id' element={<ProtectedRoutes><ShowBottle/></ProtectedRoutes>} />
          <Route path='/wineries/:id' element={<ProtectedRoutes><ShowWinery/></ProtectedRoutes>} />
          <Route path='/create_winery' element={<ProtectedRoutes><CreateWinery/></ProtectedRoutes>} />
          <Route path='/signup' element={<SignUP/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/me' element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
          <Route path='/logout' element={<ProtectedRoutes><Logout /></ProtectedRoutes>} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
