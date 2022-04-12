// require
const store = require('../store.js')

// code starts
const onSignUpSuccess = function () {
  $('#auth-display').html('<p>You signed up successfully!</p>')

  $('form').trigger('reset')
  console.log('Signed up')
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>Error while signing up</p>')

  $('form').trigger('reset')
}

const onSignInSuccess = function (response) {
  // reset all form
  $('form').trigger('reset')
  $('#auth-display').html('<p>You signed in successfully!</p>')
  // store data from the response in my store object
  store.user = response.user
  console.log(store.user._id)
  console.log('User signed in')
}

const onSignInFailure = function () {
  $('#auth-display').html('<p>Password or email is incorrect</p>')
  $('form').trigger('reset')
}

const onChangePwSuccess = function () {
  $('#auth-display').html('<p>User changed password successfully</p>')

  $('form').trigger('reset')
}

const onChangePwFailure = function () {
  $('#auth-display').html('<p>Error while changing password</p>')
}

const onSignOutSuccess = function () {
  $('#auth-display').html('<p>Goodbye!</p>')

  $('form').trigger('reset')
}

const onSignOutFailure = function () {
  $('#auth-display').html('<p>Error while signing out</p>')
}
// export
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutFailure,
  onSignOutSuccess,
  onChangePwFailure,
  onChangePwSuccess
}
