<template>
  <section id="recent">
    <v-container class="text-center">
      <h2 class="section-title large">Недавние проекты</h2>
      <p>Капитальный ремонт с реконструкцией офисно&#8288;&#8211;&#8288;торгового центра Якиманка 26</p>
    </v-container>
    <v-row no-gutters>
      <v-col v-for="(image, n) in IMAGES" :key="`recentImage${n}`" cols="12" sm="6" md="3">
        <pre-image :src="image" aspect-ratio="1.5" />
      </v-col>
    </v-row>
    <v-container class="d-flex">
      <Link to="/projects" class="ml-auto">Подробнее</Link>
    </v-container>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

const IMAGES = [
  "projects/yakimanka/1.webp",
  "projects/yakimanka/3.webp",
  "projects/yakimanka/2.webp",
  "projects/yakimanka/4.webp",
]

export default defineComponent({
  setup() {
    return {
      IMAGES,
    }
  },
})
</script>

<style lang="sass" scoped>
#recent
  background-color: black
  color: white
</style>
