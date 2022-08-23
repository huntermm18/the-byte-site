<template>
  <div>
    <h1 style="text-align: center">Recipes</h1>
    <v-chip-group
      v-model="activeTags"
      active-class="blue white--text"
      multiple
      column
    >
      <v-chip v-for="tag in tags">{{ tag }}</v-chip>
    </v-chip-group>
    <div class="recipe-display">
      <div :key="activeTags" style="margin: 30px" v-for="recipe in recipes" v-if="!activeTags.length || tagActive(recipe)">
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
// import { Vue } from 'nuxt-property-decorator'
import recipes from 'assets/recipes.json'
import tags from 'assets/tags.json'

export default {
  name: 'recipePage',
  data: () => ({
      recipes: recipes,
      tags: tags,
      activeTags: []
  }),
  methods: {
    tagActive: function (recipe) {
      for (let tag of this.activeTags) {
        if (!recipe.tags.includes(tags[tag])) return false
      }
      // for (let tag of recipe.tags) {
      //   if (this.activeTags.includes(tags.indexOf(tag))) return true
      //   if ()
      // }
      // return false
      return true
    }
  }
}

</script>

<style>
.recipe-display {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
