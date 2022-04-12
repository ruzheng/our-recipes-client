const config = require('../config')
// const store = require('../store')

const createUnit = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/units',
    data // same as data: data
  })
}

module.exports = {
  createUnit
}
