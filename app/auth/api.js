// require
const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data // same as data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data // same as data: data
  })
}

const changePw = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data, // same as data: data
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',

    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signIn,
  signUp,
  signOut,
  changePw
}
