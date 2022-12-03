import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header';
import Users from './components/user_module/users'
import Wineries from './components/winery_module/wineries'
import Bottles from './components/bottle_module/bottles'

function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route path='/users' element={<Users/>} />

          <Route path='/wineries' element={<Wineries/>} />

          <Route path='/bottles' element={<Bottles/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
