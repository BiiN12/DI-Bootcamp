export interface Recipe {
    id: string;
    title: string;
    ingredients: string[]
    instructions: string;
    isFavorite: boolean;
}

export class RecipeCollection {
    private recipes: Recipe[];
    constructor() {
        this.recipes = [];
    }

    addRecipe(recipe: Recipe): void {
        this.recipes.push(recipe);
    }

    removeRecipe(recipe: Recipe): void {
        this.recipes = this.recipes.filter(r => r !== recipe);
    }

    getAllRecipes(): Recipe[] {
        return this.recipes;
    }

    clearAllRecipes(): void {
        this.recipes = [];
    }

    saveToLocalStorage(): void {
        localStorage.setItem('recipes', JSON.stringify(this.recipes));
    }

    loadFromLocalStorage(): void {
        const data = localStorage.getItem('recipes');
        if (data) {
            this.recipes = JSON.parse(data);
        }
    }
}

