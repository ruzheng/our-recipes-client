// const store = require('../store.js')

const onUnitCreateSuccess = function () {
  $('#auth-display').html('<p>Unit Created!</p>')

  $('form').trigger('reset')
  console.log('unit created')
}

const onUnitCreateFailure = function () {
  $('#auth-display').html('<p>Error when creating unit</p>')

  $('form').trigger('reset')
}

const onIndexUnitsSuccess = function (response) {
  let editUnitHtml = ''

  response.units.forEach((unit) => {
    // booksHtml += '<li>' + book.title + '</li>'
    // booksHtml = booksHtml + '<li>' + book.title + '</li>'

    editUnitHtml += `
                      <div>
                        <h5>${unit.name}</h6>
                        <p>Element: ${unit.element} <br>
                        Rarity: ${unit.rarity} <br>
                        Region: ${unit.region}</p>
                        <form class='update-unit' data-id=${unit._id}>
                            <input name="name" type="text" placeholder="Name">
                            <input name="element" type="text" placeholder="Element">
                            <input name="rarity" type="text" placeholder="Rarity">
                            <input name="region" type="text" placeholder="Region">
                            <button type="submit">Update Unit</button>
                        </form>
                         <button class='delete-unit' data-id=${unit._id}>Delete Unit</button>
                      </div>
                    `
  })

  $('#unit-display').html(editUnitHtml)
}

const onIndexUnitsFailure = function () {
  $('#auth-display').text('There was an error')
}

const onUpdateUnitSuccess = function () {
  $('#auth-display').html('Unit updated')
}

const onUpdateUnitFailure = function () {
  $('#auth-display').text('Failure to update unit')
}

const onDeleteUnitSuccess = function () {
  $('#auth-display').text('Unit deleted')
}

const onDeleteUnitFailure = function () {
  $('#auth-display').text('Failure to delete Unit')
}

module.exports = {
  onUnitCreateSuccess,
  onUnitCreateFailure,
  onIndexUnitsSuccess,
  onIndexUnitsFailure,
  onUpdateUnitSuccess,
  onUpdateUnitFailure,
  onDeleteUnitFailure,
  onDeleteUnitSuccess
}
