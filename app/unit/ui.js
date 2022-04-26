// const store = require('../store.js')

const onUnitCreateSuccess = function () {
  $('#resource-response').html('<p>Unit Created!</p>')

  $('form').trigger('reset')
}

const onUnitCreateFailure = function () {
  $('#resource-response').html(
    '<p>Error when creating unit</p>'
  )

  $('form').trigger('reset')
}

const onIndexUnitsSuccess = function (response) {
  let editUnitHtml = ''
  if (response.units.length === 0) {
    $('#resource-response').html('<p>You have 0 Unit</p>')
    $('#unit-display').html('')
  } else {
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
                            <input name="unit[name]" type="text" placeholder="Name">
                            <input name="unit[element]" type="text" placeholder="Element">
                            <input name="unit[rarity]" type="text" placeholder="Rarity">
                            <input name="unit[region]" type="text" placeholder="Region">
                            <button type="unit[submit]">Update Unit</button>
                        </form>
                         <button class='delete-unit' data-id=${unit._id}>Delete Unit</button>
                      </div>
                    `
    })

    $('#unit-display').html(editUnitHtml)
    $('#resource-response').text('Unit index retrieved')
  }
}

const onIndexUnitsFailure = function () {
  $('#resource-response').text('There was an error')
}

const onUpdateUnitSuccess = function () {
  $('#resource-response').html('Unit updated')
}

const onUpdateUnitFailure = function () {
  $('#resource-response').text('Failure to update unit')
}

const onDeleteUnitSuccess = function () {
  $('#resource-response').text('Unit deleted')
}

const onDeleteUnitFailure = function () {
  $('#resource-response').text('Failure to delete Unit')
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
