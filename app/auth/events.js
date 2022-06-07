'use strict'
// require
const getFormFields = require('../../lib/get-form-fields.js')
// const store = require('../store.js')
const authApi = require('./api.js')
const authUi = require('./ui.js')

// global variables

// codes starts
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi
    .signUp(data)
    .then(() => authUi.onSignUpSuccess())
    .catch(() => authUi.onSignUpFailure())
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  authApi
    .signIn(data)
    .then((response) => authUi.onSignInSuccess(response))
    // .then(() => { $('#chang-pw-form').hide() })
    .then(() => { $('#start-form').hide() })
    .then(() => { $('#body-resource').show() })
    .then(() => { $('#header').show() })
    .catch(() => authUi.onSignInFailure())
}

const onChangePw = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  authApi
    .changePw(data)
    .then((response) => authUi.onChangePwSuccess(response))
    // .then(() => { $('#chang-pw-form').show() })
    .catch(() => authUi.onChangePwFailure())
}

const onSignOut = function () {
  authApi
    .signOut()
    .then(() => authUi.onSignOutSuccess())
    .then(() => { $('#body-resource').hide() })
    .then(() => { $('#header').hide() })
    .then(() => { $('#start-form').show() })
    .then(() => { $('#sign-in-form').hide() })
    .then(() => { $('#sign-up-form').hide() })
    .catch(() => authUi.onSignUpFailure())
}

// exports
module.exports = {
  onSignIn,
  onSignUp,
  onSignOut,
  onChangePw
  // onLogin
}
