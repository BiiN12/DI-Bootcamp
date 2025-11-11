import { RecipeItem } from './models/RecipeItem'
import { RecipeCollection } from './models/RecipeCollection'
import { RecipeTemplate } from './templates/RecipeTemplate'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="recipe-app">
  <h1>Recipe Book App</h1>
  <form id="recipeEntryForm">
    <input type="text" id="recipeTitle" placeholder="Recipe Title" required />
    <textarea
      id="ingredients"
      placeholder="Enter ingredients (one per line)"
      required
    ></textarea>
    <textarea
      id="instructions"
      placeholder="Enter cooking instructions"
      required
    ></textarea>
    <button type="submit">Add Recipe</button>
  </form>

  <div id="recipeContainer"></div>

  <button id="clearRecipesButton">Clear All Recipes</button>
</div>
`

const recipeCollection = new RecipeCollection();
recipeCollection.loadFromLocalStorage();
const recipeContainer = document.getElementById('recipeContainer') as HTMLDivElement;
const recipeTemplate = new RecipeTemplate();

function renderRecipes() {
    recipeContainer.innerHTML = '';
    const recipes = recipeCollection.getAllRecipes();
    recipes.forEach(recipe => {
        const recipeHTML = recipeTemplate.render(recipe);
        recipeContainer.innerHTML += recipeHTML;
    });
}

renderRecipes();

const recipeEntryForm = document.getElementById('recipeEntryForm') as HTMLFormElement;
recipeEntryForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const titleInput = document.getElementById('recipeTitle') as HTMLInputElement;
    const ingredientsInput = document.getElementById('ingredients') as HTMLTextAreaElement;
    const instructionsInput = document.getElementById('instructions') as HTMLTextAreaElement;

    const newRecipe = new RecipeItem(
        titleInput.value,
        ingredientsInput.value.split('\n'),
        instructionsInput.value
    );

    // console.log(newRecipe)

    recipeCollection.addRecipe(newRecipe);
    recipeCollection.saveToLocalStorage();
    renderRecipes();

    titleInput.value = '';
    ingredientsInput.value = '';
    instructionsInput.value = '';
});

const clearRecipesButton = document.getElementById('clearRecipesButton') as HTMLButtonElement;
clearRecipesButton.addEventListener('click', function() {
    recipeCollection.clearAllRecipes();
    recipeCollection.saveToLocalStorage();
    renderRecipes();
});

recipeContainer.addEventListener('click', function(event) {
    const target = event.target as HTMLElement;

    if (target.classList.contains('delete-button')) {
      const recipeId = target.getAttribute('data-id');
      const recipe = recipeCollection.getAllRecipes().find(r => r.id === recipeId);
      if (recipe) {
          recipeCollection.removeRecipe(recipe);
          recipeCollection.saveToLocalStorage();
          renderRecipes();
      }
    } else if (target.classList.contains('favorite-button')) {
      const recipeId = target.getAttribute('data-id');
      const recipe = recipeCollection.getAllRecipes().find(r => r.id === recipeId);
      if (recipe) {
          recipe.isFavorite = !recipe.isFavorite;
          recipeCollection.saveToLocalStorage();
          renderRecipes();
      }
    }
});
