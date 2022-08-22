<template>
  <div>
    <h1 style="text-align: center">Recipes</h1>
    <div class="recipe-display">
      <div style="margin: 30px" v-for="recipe in recipes">
        <recipe-card
          :title="recipe.title"
          :sub-title="recipe.subTitle"
          :ingredients="recipe.ingredients"
          :instructions="recipe.instructions"
          :picture="recipe.picture"
        />
      </div>
    </div>
  </div>

</template>

<script>
// import { Vue } from 'nuxt-property-decorator'
import recipes from 'assets/recipes.json'

export default {
  name: 'recipePage',
  data () {
    return {
      recipes: recipes
    }
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
}
</style>
