// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const unitEvents = require('./unit/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-pw-form').on('submit', authEvents.onChangePw)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#unit-input-form').on('submit', unitEvents.onUnitCreate)
  $('#get-units').on('click', unitEvents.onUnitsIndex)
  $('#unit-display').on('submit', '.update-unit', unitEvents.onUnitUpdate)
  $('#unit-display').on('click', '.delete-unit', unitEvents.onUnitDelete)
})
