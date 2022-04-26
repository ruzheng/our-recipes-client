// requires
// const store = require('../store.js')
// const authApi = require('./api.js')
const unitUi = require('./ui.js')
const unitApi = require('./api.js')

const getFormFields = require('../../lib/get-form-fields.js')

const onUnitsIndex = () => {
  unitApi
    .indexUnits()
    .then((response) => unitUi.onIndexUnitsSuccess(response))
    .catch(() => unitUi.onIndexUnitsFailure())
}

const onUnitCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  unitApi
    .createUnit(data)
    .then(() => unitUi.onUnitCreateSuccess())
    .catch(() => unitUi.onUnitCreateFailure())

  onUnitsIndex()
}

const onUnitUpdate = function (event) {
  event.preventDefault()

  const updateForm = event.target
  const unitId = $(updateForm).data('id')
  const data = getFormFields(updateForm)
  // const data = getFormFields(event.target)
  // data.book.id = bookId

  unitApi
    .updateUnit(data, unitId)
    .then(() => unitUi.onUpdateUnitSuccess())
    .then(onUnitsIndex)
    .catch(() => unitUi.onUpdateUnitFailure())
}

const onUnitDelete = function (event) {
  const deleteButton = event.target

  const bookId = $(deleteButton).data('id')

  unitApi
    .deleteUnit(bookId)
    .then(() => unitUi.onDeleteUnitSuccess())
    .then(onUnitsIndex)
    .catch(() => unitUi.onDeleteUnitFailure())
}

module.exports = {
  onUnitCreate,
  onUnitsIndex,
  onUnitUpdate,
  onUnitDelete
}
