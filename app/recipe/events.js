// requires
// const store = require('../store.js')
// const authApi = require('./api.js')
const recipeUi = require('./ui.js')
const recipeApi = require('./api.js')

const getFormFields = require('../../lib/get-form-fields.js')

const onRecipesIndex = () => {
  recipeApi
    .indexRecipes()
    .then((response) => recipeUi.onIndexRecipesSuccess(response))
    .then(() => { $('#body-resource').hide() })
    .catch(() => recipeUi.onIndexRecipesFailure())
}

const onRecipeCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  recipeApi
    .createRecipe(data)
    .then(() => recipeUi.onRecipeCreateSuccess())
    .catch(() => recipeUi.onRecipeCreateFailure())
}

const onRecipeUpdate = function (event) {
  event.preventDefault()

  const updateForm = event.target
  const recipeId = $(updateForm).data('id')
  const data = getFormFields(updateForm)
  // const data = getFormFields(event.target)
  // data.book.id = bookId

  recipeApi
    .updateRecipe(data, recipeId)
    .then(() => recipeUi.onUpdateRecipeSuccess())
    .then(onRecipesIndex)
    .catch(() => recipeUi.onUpdateRecipeFailure())
}

const onRecipeDelete = function (event) {
  const deleteButton = event.target

  const bookId = $(deleteButton).data('id')

  recipeApi
    .deleteRecipe(bookId)
    .then(() => recipeUi.onDeleteRecipeSuccess())
    .then(onRecipesIndex)
    .catch(() => recipeUi.onDeleteRecipeFailure())
}

module.exports = {
  onRecipeCreate,
  onRecipesIndex,
  onRecipeUpdate,
  onRecipeDelete
}
