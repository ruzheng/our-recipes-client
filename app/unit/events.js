// requires
// const store = require('../store.js')
const authApi = require('./api.js')
const authUi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onCreate = function (event) {
  event.preventDefault()
  console.log('Unit Created')
  const data = getFormFields(event.target)
  authApi
    .createUnit(data)
    .then(() => authUi.onCreateSuccess())
    .catch(() => authUi.onCreateFailure())
}

module.exports = {
  onCreate
}
