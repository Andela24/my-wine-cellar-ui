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

function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route path='/users' element={<Users/>} />
          <Route path='/wineries' element={<Wineries/>} />
          <Route path='/bottles' element={<Bottles/>} />
          <Route path='/update_bottle' element={<UpdateBottle/>} />
          <Route path='/create_bottle' element={<CreateBottle/>} />
          <Route path='/create_winery' element={<CreateWinery/>} />
          <Route path='/signup' element={<SignUP/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
