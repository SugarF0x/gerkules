<template>
  <div v-frag>
    <about-header />
    <about-info />
    <about-location />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({
  layout: "nav",
  setup() {},
})
</script>

<style lang="sass" scoped>
section::v-deep
  max-width: 1000px
  margin: 0 auto
</style>
