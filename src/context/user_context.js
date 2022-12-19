import { createContext, useState, useEffect } from "react"

const UserContext = createContext('User')

function UserProvider({children}) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false)
  const [errors, setErrors] = useState(false)
  const [loading, setLoading]= useState(true);

  useEffect(()=> {
    fetch('/me')
    .then(resp => {
        if(resp.ok){
            resp.json().then(data => {
               setCurrentUser(data)
               data.error? setLoggedIn(false) : setLoggedIn(true)
            })
        }else {
            resp.json().then(data => setErrors(data.error))
        }
    })
   
  }, [])

  const handleCurrentUser = (user) => {
    if(user.username) {
      setCurrentUser(user);
      setLoggedIn(true);
      setLoading(false);
   
    }
  }

  const logoutCurrentUser = () => {
    setCurrentUser({});
    setLoggedIn(false);
    setLoading(false);
  }


  return(
    <UserContext.Provider value={{currentUser, setCurrentUser, handleCurrentUser, loggedIn, errors, loading, logoutCurrentUser}}>{children}</UserContext.Provider>
  )
}

export {UserProvider, UserContext}