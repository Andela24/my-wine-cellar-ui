import React from 'react'


const Home = ( {loggedIn, currentUser } ) => {
  if(localStorage.getItem('user_id')) {
    return(
      <div className="Home">
        <h1 style={{ textAlign: 'center' }}> Welcome to Wine Cellar </h1>
        <p style={{ textAlign: 'center' }}>Your Cellar is worth caring about.</p>
      </div>
    )
  }
  else {
    return (
      <div className="Home">
        <h1 style={{ textAlign: 'center' }}> Welcome to Wine Cellar </h1>
        <h3>Please login</h3>
        <p>Cellr allows you to organize your wine collection in a number of different ways, such by year, grape variety, cost, and more.</p>
      </div>
    );
  }
}

export default Home
