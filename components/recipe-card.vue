<template>

  <v-dialog
    v-model="dialog"
    width="1000"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-card
        class="mx-auto"
        max-width="320"
      >
        <v-img v-if="picture"
          :src="picture"
          height="200px"
        />
<!--        :src="'/images/' + picture"-->
        <v-img v-else
          :src="'/chef.png'"
          contain
          height="200px"
        />

        <v-card-title>
          {{ title }}
        </v-card-title>

        <v-card-subtitle>
          {{ subTitle }}
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="orange lighten-2"
            text
            v-bind="attrs"
            v-on="on"
          >
            See Recipe
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            icon
            @click="show = !show"
          >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>

<!--        what is shown on the expanded view-->
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              <li v-for="i in ingredients">{{i}}</li>
              <br>{{ instructions }}
              <br>
              <v-card-text>
                <v-chip-group
                  column
                >
                  <v-chip v-for="tag in tags">{{ tag }}</v-chip>
                </v-chip-group>
              </v-card-text>
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </template>

<!--    v-dialog pop-up box-->
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        {{ title }}
      </v-card-title>

      <v-card-text>
        <br>
        <li v-for="i in ingredients">{{i}}</li>
        <br>{{ instructions }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="dialog = false"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<script>

export default {
  name: 'recipeCard',
  props: ['title', 'subTitle', 'instructions', 'ingredients', 'tags', 'picture'],
  data () {
    return {
      show: false,
      dialog: false
    }
  }
}

</script>

<style>
.v-card__text, .v-card__title {
  word-break: normal;
}
</style>
