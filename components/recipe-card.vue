<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="picture"
      height="200px"
    ></v-img>

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
        @click="show = !show"
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

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ recipe }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class recipeCard extends Vue {
  @Prop({required: true})
  title

  @Prop({required: false})
  subTitle

  @Prop({required: true})
  recipe

  @Prop({required: false})
  picture

  show = false

  // import { Component, Prop, Vue } from 'nuxt-property-decorator'
  // import { colors } from '~/components/colors'
  // @Component
  // export default class FavoriteColorCard extends Vue {
  //   @Prop({ required: true })
  //   name?: string
  //   @Prop({ required: true })
  //   byuId?: string
  //   @Prop({ required: true })
  //   favColor?: string
  //   color: string = ''
  //   mounted () {
  //     this.color = this.favColor ?? ''
  //   }
  //   async changeColor () {
  //     await this.$axios.$put(`https://api.byu.edu:443/domains/fullstack-training/mhm62-fav-color/V1/${this.byuId}`
  //       , {
  //         byu_id: this.byuId,
  //         fav_color: this.color,
  //         users_name: this.name
  //       })
  //     console.log(`Favorite color changed for ${this.name}`)
  //   }
}
</script>
