<template>
  <div>
    <h1 style="text-align: center">Recipes</h1>
    <v-chip-group
      v-model="activeTags"
      active-class="blue white--text"
      multiple
      column
    >
      <v-chip v-for="tag in tags" :key="tag">{{ tag }}</v-chip>
    </v-chip-group>
    <div class="recipe-display">
      <div
        :key="recipe.id"
        style="margin: 30px"
        v-for="recipe in filteredRecipes"
      >
        <recipe-card
          :title="recipe.title"
          :sub-title="recipe.subTitle"
          :ingredients="recipe.ingredients"
          :instructions="recipe.instructions"
          :tags="recipe.tags"
          :picture="recipe.picture"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import recipes from 'assets/recipes.json'
import tags from "assets/tags.json";
import { get_recipes } from "assets/get_recipes_from_database.js";

export default {
  name: "recipePage",

  data: () => ({
    recipes: [],
    tags: tags,
    activeTags: [],
  }),

  created() {
    get_recipes().then((result) => {
      this.recipes = result;
    });
  },

  computed: {
    filteredRecipes() {
      if (this.activeTags.length === 0) {
        return this.recipes;
      } else {
        return this.recipes.filter((recipe) => {
          return this.activeTags.every((tag) => {
            return recipe.tags.includes(this.tags[tag]);
          });
        });
      }
    },
  },

  methods: {
    tagActive: function (recipe) {
      for (let tag of this.activeTags) {
        if (!recipe.tags.includes(tags[tag])) return false;
      }
      return true;
    },
  },
};
</script>

<style>
.recipe-display {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
