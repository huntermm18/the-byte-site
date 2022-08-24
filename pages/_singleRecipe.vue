<template>
<div>
  <v-bottom-navigation style="margin: 20px" v-model="value">
    <v-btn value="Home" to="/">
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn value="All" to="/recipePage">
      <span>All Recipes</span>
      <v-icon>mdi-format-list-checks</v-icon>
    </v-btn>
  </v-bottom-navigation>

  <recipe-card
    :title="recipe.title"
    :sub-title="recipe.subTitle"
    :ingredients="recipe.ingredients"
    :instructions="recipe.instructions"
    :tags="recipe.tags"
    :picture="recipe.picture"
  />

</div>

</template>


<script>
import recipes from 'assets/recipes.json'

export default {
  data () {
    return {
      recipe: recipes.find(o => o.title === this.$route.params.singleRecipe),
      value: 0
    }
  }
}
</script>
