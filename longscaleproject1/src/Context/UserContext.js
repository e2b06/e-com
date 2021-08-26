import React, { useEffect, useState } from 'react'

//  Helper
import { googleSignInPopup, signOut, logInState } from '../Utils/helper/auth'

//  Firebase
import { provider } from '../firebase'

const UserContext = React.createContext()

function UserProvider({ children }) {
  //  Obtain State Value (status, user) from local storage
  const { status, user } = logInState()

  //  State Value
  const [isLogIn, setIsLogIn] = useState(false)
  const [isLogOut, setIsLogOut] = useState(false)

  useEffect(() => {
    if (isLogIn) {
      //  prevent cancel the login
      googleSignInPopup(provider, setIsLogIn)
    }

    if (isLogOut) {
      signOut()
    }
  }, [isLogIn, isLogOut])

  //  Log In function (Header Component)
  const LogInHandler = () => {
    setIsLogIn(!isLogIn)
  }

  //  Log Out function  (Header Component)
  const LogOutHandler = () => {
    setIsLogOut(!isLogOut)
  }

  return (
    <UserContext.Provider
      value={{ LogInHandler, LogOutHandler, isLogIn, status, user }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
export { UserProvider }
