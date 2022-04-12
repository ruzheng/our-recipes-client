'use strict'
// require
const getFormFields = require('../../lib/get-form-fields.js')
const store = require('../store.js')
const authApi = require('./api.js')
const authUi = require('./ui.js')

// global variables

// codes starts
const onSignUp = function (event) {
  event.preventDefault()
  console.log('You sign up')
  const data = getFormFields(event.target)
  authApi
    .signUp(data)
    .then(() => authUi.onSignUpSuccess())
    .catch(() => authUi.onSignUpFailure())
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('You sign in')

  const data = getFormFields(event.target)
  authApi
    .signIn(data)
    .then((response) => authUi.onSignInSuccess(response))
    // .then(onCreateGame)
    .catch(() => authUi.onSignInFailure)
  console.log(store.user)
}

const onChangePw = function (event) {
  event.preventDefault()
  console.log('here')

  const data = getFormFields(event.target)

  authApi
    .changePw(data)
    .then((response) => authUi.onChangePwSuccess(response))
    .catch(() => authUi.onChangePwFailure())
}

const onSignOut = function () {
  console.log('You sign out')
  authApi
    .signOut()
    .then(() => authUi.onSignOutSuccess())
    .catch(() => authUi.onSignUpFailure())
}

// exports
module.exports = {
  onSignIn,
  onSignUp,
  onSignOut,
  onChangePw
}
