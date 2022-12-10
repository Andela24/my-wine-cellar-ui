import React, { useContext } from 'react'
import { UserContext } from '../context/user_context';
import { Link } from 'react-router-dom'


const Home = () => {
  const {currentUser} = useContext(UserContext)
  if(currentUser) {
    return(
      <div className="picture">
        <h1 style={{ textAlign: 'center' }}> Welcome to Wine Cellar </h1>
        <p style={{ textAlign: 'center' }}>Your Cellar is worth caring about.</p>
        <Link to="/bottles"> Viewing my Collection </Link>
<img src="https://images.pexels.com/photos/6309832/pexels-photo-6309832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Welcome to Wine Cellar"></img>

      </div>
    )
  }
  else {
    return (
      <div className="picture">
        <h1 style={{ textAlign: 'center' }}> Welcome to Wine Cellar </h1>
        <h3>Please login</h3>
        <p>Cellr allows you to organize your wine collection in a number of different ways, such by year, grape variety, cost, and more.</p>
        <img src="https://images.pexels.com/photos/6309844/pexels-photo-6309844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Welcome to Wine Cellar"></img>
      </div>
    );
  }
}

export default Home
