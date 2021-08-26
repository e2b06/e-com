import app from '../../firebase'

//  Initial Login State
export const logInState = () => {
  const logInState = JSON.parse(localStorage.getItem('LOGIN_STATUS')) || {}

  return logInState
}

//  Sign In Function (Pop Up)
export function googleSignInPopup(provider, callback) {
  app
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      var user = result.user

      localStorage.setItem(
        'LOGIN_STATUS',
        JSON.stringify({ status: true, user })
      )
      window.location.reload()
    })
    .catch((error) => {
      localStorage.setItem(
        'LOGIN_STATUS',
        JSON.stringify({ status: false, user: {} })
      )

      callback(false)

      console.log(error)
    })
}

//  Sign Out Function
export function signOut() {
  app
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.

      localStorage.setItem(
        'LOGIN_STATUS',
        JSON.stringify({ status: false, user: {} })
      )
      // reload after sign out
      window.location.reload()
    })
    .catch((error) => {
      // An error happened.
      console.log(error)
    })
}
