<template>
  <v-card flat>
    <v-snackbar
      v-model="snackbar"
      absolute
      top
      right
      color="success"
    >
      <span>Success!</span>
      <v-icon dark>
        mdi-checkbox-marked-circle
      </v-icon>
    </v-snackbar>
    <v-form
      ref="form"
      @submit.prevent="submit"
    >
      <v-container fluid>
        <h1 style="text-align: center">Add a Recipe (Under Construction)</h1>
        <v-row>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="form.name"
              :rules="rules.name"
              color="purple darken-2"
              label="Recipe name"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="form.subtitle"
              color="blue darken-2"
              label="Subtitle (optional)"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="form.ingredients"
              color="teal"
            >
              <template v-slot:label>
                <div>
                  Ingredients <small>(separate by commas)</small>
                </div>
              </template>
            </v-textarea>
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="form.instructions"
              color="teal"
            >
              <template v-slot:label>
                <div>
                  Instructions
                </div>
              </template>
            </v-textarea>
          </v-col>

          <v-chip-group
            v-model="activeTags"
            active-class="blue white--text"
            multiple
            column
          >
            <v-chip v-for="tag in tags">{{ tag }}</v-chip>
          </v-chip-group>

        </v-row>
      </v-container>
      <v-card-actions>
        <v-btn
          text
          @click="resetForm"
        >
          Cancel
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="!formIsValid"
          text
          color="primary"
          type="submit"
        >
          Register
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>


<script>
import tags from "assets/tags.json"
// import fs from "fs"
let recipes = require("assets/fake_recipes.json")

export default {
  data () {
    const defaultForm = Object.freeze({
      name: '',
      subtitle: '',
      ingredients: '',
      instructions: '',
      photo: null,
    })

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        animal: [val => (val || '').length > 0 || 'This field is required'],
        name: [val => (val || '').length > 0 || 'This field is required'],
      },
      conditions: false,
      snackbar: false,
      defaultForm,
      tags: tags,
      activeTags: []
    }
  },

  computed: {
    formIsValid () {
      return (
        this.form.name &&
        (this.form.ingredients || this.form.instructions)
      )
    },
  },

  methods: {
    resetForm () {
      this.form = Object.assign({}, this.defaultForm)
      this.$refs.form.reset()
    },
    submit () {
      this.snackbar = true
      // const fs = require('fs');
      try {
        const newRecipe = {
          name: this.form.name,
          subtitle: this.form.subtitle,
          ingredients: this.form.ingredients.split(','),
          instructions: this.form.instructions,
          tags: this.activeTags,
          photo: this.form.photo
        }
        console.log('newRecipe: ', newRecipe)
        // recipes.push(newRecipe)
        // fs.writeFileSync('assets/fake_recipes.json', JSON.stringify(recipes))
      }
      catch(e) { alert('Failed to save!') }
      this.resetForm()

    },
    tagActive: function (recipe) {
      for (let tag of this.activeTags) {
        if (!recipe.tags.includes(tags[tag])) return false
      }
      return true
    },
  },
}
</script>

