<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Welcome to The Byte Site
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="searchTerm"
            @input="searchFruits"
            label="Search Recipes"
            placeholder="Search not yet implemented"
            append-icon="mdi-magnify"
            filled
            rounded
            dense
          ></v-text-field>

          <v-list three-line>
            <template v-for="(recipe, index) in recipes" v-if="searchResults.includes(recipe.title)">
              <v-list-item
                :key="recipe.title"
              >
                <v-list-item-avatar>
                  <v-img :src="recipe.picture ? '/images/' + recipe.picture : '/chef.png'"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-html="recipe.title"></v-list-item-title>
                  <v-list-item-subtitle v-html="recipe.tags"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>

        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/recipePage"
          >
            Recipes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import recipes from 'assets/recipes.json'

export default {
  name: 'IndexPage',
  data () {
    return {
      recipes: recipes,
      searchResults: []
    }
  }
}
</script>
