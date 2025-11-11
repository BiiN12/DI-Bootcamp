import { type Recipe } from "../models/RecipeCollection";

export class RecipeTemplate {
    render(recipe: Recipe): string {
        return `<div class="recipe-card">
            <h2>${recipe.title}</h2>
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h3>Instructions:</h3>
            <p>${recipe.instructions}</p>
            <button data-id="${recipe.id}" class="favorite-button">${recipe.isFavorite ? 'Unfavorite' : 'Favorite'}</button>
            <button data-id="${recipe.id}" class="delete-button">Delete</button>
        </div>`;
    }
}