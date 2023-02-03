<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="580" >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250"
           src="https://cdn.shrm.org/image/upload/c_crop,h_1118,w_1987,x_0,y_106/c_fit,f_auto,q_auto,w_767/v1/Technology/iStock-655652064_xjid9m?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjEwNiwieDIiOjE5ODcsInkyIjoxMjI0LCJ3IjoxOTg3LCJoIjoxMTE4fX0%3D">
    </v-img>

    <v-card-title>GPT-3</v-card-title>

    <v-card-text>
      <div class="my-4 text-subtitle-1">Generate text using the OpenAI API</div>
<!--      <div>Describe a recipe you would like to be generated (i.e. cookies, french bread)</div>-->
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Enter a Prompt</v-card-title>
    <v-text-field
      v-model="textInput"
      label=""
      placeholder="Prompt"
      filled rounded dense
      style="padding: 10px"
      v-on:keyup.enter="generateRecipe"
    ></v-text-field>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="generateRecipe"
      >
        Generate
      </v-btn>

      <!--      <v-btn icon @click="show = !show">-->
      <!--        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>-->
      <!--      </v-btn>-->

    </v-card-actions>

    <!--        what is shown on the expanded view-->
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text :key="textOutput" style="white-space: pre-wrap;">
          {{ textOutput }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import { Configuration, OpenAIApi } from "openai"
export default {
  name: "ai-recipes",
  data () {
    return {
      loading: false,
      show: false,
      textInput: '',
      textOutput: ''
    }
  },

  methods: {
    generateRecipe: function (input) {
      if (!this.textInput) return
      const configuration = new Configuration({
        organization: "org-mzAg9STB7YZwW4oX9kCpwxvh",
        apiKey: 'sk-9IVQ4tYZWLzKXy9IgHcUT$1234lbkFJ0uFIMJQpyydkCBdGSK3T'.replace('$1234', '3B')
        // apiKey: process.env.OPENAI_API_KEY,
      })
      const openai = new OpenAIApi(configuration)
      this.show = true
      this.textOutput = 'loading...'
      const completion = openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${this.textInput}`,
        max_tokens: 4096
      }).then(completion => {
        console.log(completion.data.choices[0])
        this.textOutput = completion.data.choices[0].text
      }).catch(e => {
        console.error(e)
        this.textOutput = 'An error has occurred. Please try again later.'
      })
    },
  },
}
</script>
<style scoped>
* {
  word-break: break-word;
}
</style>
