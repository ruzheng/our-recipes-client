const config = require('../config')
const store = require('../store')

const createUnit = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/units',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: { unit: data }
  })
}

const indexUnits = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/units',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }

  })
}

const updateUnit = function (data, id) {
  console.log(data)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/units/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: { unit: data }
  })
}

const deleteUnit = function (id) {
  console.log(id)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/units/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createUnit,
  indexUnits,
  updateUnit,
  deleteUnit
}
