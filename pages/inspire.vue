<template>
  <div>
<!--    <div>-->
<!--      <v-img-->
<!--        :src="'/annie-and-hunter.jpg'"-->
<!--        max-height="600"-->
<!--        max-width="800"-->
<!--      />-->
<!--    </div>-->

    <template>
      <v-carousel
        cycle
        height="500"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(item,i) in slides"
          :key="i"
          :src="'/images/annie-and-hunter/' + item"
        ></v-carousel-item>
      </v-carousel>
    </template>
  </div>


<!--  <v-row>-->
<!--    <v-col class="text-center">-->
<!--      <blockquote class="blockquote">-->
<!--        Under Construction-->
<!--      </blockquote>-->
<!--    </v-col>-->
<!--  </v-row>-->
</template>

<script>
import recipes from "assets/recipes.json";

export default {
  name: 'InspirePage',
  data () {
    return {
      slides: ['/annie-and-hunter.jpg', '/annie-and-hunter-2.jpg', '/annie-and-hunter-3.jpg', '/annie-and-hunter-4.jpg']
    }
  }
}
</script>
