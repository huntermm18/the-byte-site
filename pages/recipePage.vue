<template>
  <div>
    <h1 style="text-align: center">Recipes</h1>
    <v-chip-group
      v-model="activeTags"
      active-class="deep-purple accent-4 white--text"
      multiple
      column
      @change="log()"
    >
      <v-chip @change="log()" v-for="tag in tags">{{ tag }}</v-chip>
    </v-chip-group>
    <div class="recipe-display">
      <div style="margin: 30px" v-for="recipe in recipes">
        <recipe-card v-if="!activeTags.length || tagActive(recipe)"
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
    log: function () {
      console.log('activeTags: ', this.activeTags)
    },
    // tagActive: function (recipe) {
    //   for (let tag of recipe.tags) {
    //     if (this.activeTags.includes(recipe.tags.indexOf(tag))) return true
    //   }
    //   return false
    // }
  }
}

// export default class byu_id extends Vue {
//   recipes = recipes
//   async mounted () {
//     console.log('recipe length: ', recipes.length)
//   }
// }
</script>

<style>
.recipe-display {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
