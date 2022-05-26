// const store = require('../store.js')

const onRecipeCreateSuccess = function () {
  $('#resource-response').html('<p>recipe Created!</p>')

  $('form').trigger('reset')
}

const onRecipeCreateFailure = function () {
  $('#resource-response').html(
    '<p>Error when creating recipe</p>'
  )

  $('form').trigger('reset')
}

const onIndexRecipesSuccess = function (response) {
  let editRecipeHtml = ''
  // if (response.recipes.length === 0) {
  //   $('#resource-response').html('<p>You have 0 recipe</p>')
  //   $('#recipe-display').html('')
  // } else {
  response.recipes.forEach((recipe) => {
    // booksHtml += '<li>' + book.title + '</li>'
    // booksHtml = booksHtml + '<li>' + book.title + '</li>'

    editRecipeHtml += `
                      <div>
                        <h5>${recipe.name}</h6>
                        <p>Cooktime: ${recipe.cooktime} <br>
                        Description: ${recipe.direction} <br>
                        Ingredients: ${recipe.ingredients}</p>
                        <form class='update-recipe' data-id=${recipe._id}>
                            <input name="recipe[name]" type="text" placeholder="Name">
                            <input name="recipe[cooktime]" type="text" placeholder="Cook Time">
                            <input name="recipe[direction]" type="text" placeholder="Description">
                            <input name="recipe[ingredients]" type="text" placeholder="Ingredients">
                            <button type="recipe[submit]">Update recipe</button>
                        </form>
                         <button class='delete-recipe' data-id=${recipe._id}>Delete recipe</button>
                      </div>
                    `
  })

  $('#recipe-display').html(editRecipeHtml)
  $('#resource-response').text('recipe index retrieved')
}
// }

const onIndexRecipesFailure = function () {
  $('#resource-response').text('There was an error')
}

const onUpdateRecipeSuccess = function () {
  $('#resource-response').html('recipe updated')
}

const onUpdateRecipeFailure = function () {
  $('#resource-response').text('Failure to update recipe')
}

const onDeleteRecipeSuccess = function () {
  $('#resource-response').text('recipe deleted')
}

const onDeleteRecipeFailure = function () {
  $('#resource-response').text('Failure to delete recipe')
}

module.exports = {
  onRecipeCreateSuccess,
  onRecipeCreateFailure,
  onIndexRecipesSuccess,
  onIndexRecipesFailure,
  onUpdateRecipeSuccess,
  onUpdateRecipeFailure,
  onDeleteRecipeFailure,
  onDeleteRecipeSuccess
}
