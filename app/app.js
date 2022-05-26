// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const recipeEvents = require('./recipe/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').hide()
  $('#sign-up-button').on('click', () => { $('#sign-up-form').show() })
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').hide()
  $('#login-button').on('click', () => { $('#sign-in-form').show() })
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#body-resource').hide()
  $('#create-recipe').on('click', () => {
    $('#recipe-display').hide()
    $('#body-resource').show()
  })
  $('#change-pw-form').on('submit', authEvents.onChangePw)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#recipe-input-form').on('submit', recipeEvents.onRecipeCreate)
  $('#get-recipes').on('click', recipeEvents.onRecipesIndex)
  $('#recipe-display').on('submit', '.update-recipe', recipeEvents.onRecipeUpdate)
  $('#recipe-display').on('click', '.delete-recipe', recipeEvents.onRecipeDelete)
  $('#header').hide()
  $('#change-pw-form').hide()
  $('#change-pw-button').on('click', () => { $('#change-pw-form').show() })
})
