const config = require('../config')
const store = require('../store')

const createRecipe = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/recipes',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const indexRecipes = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/recipes',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }

  })
}

const updateRecipe = function (data, id) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/recipes/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const deleteRecipe = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/recipes/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createRecipe,
  indexRecipes,
  updateRecipe,
  deleteRecipe
}
