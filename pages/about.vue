<script lang="ts">
import { defineComponent, useMeta } from "@nuxtjs/composition-api"

export default defineComponent({
  layout: "nav",
  setup() {
    useMeta({
      title: "О нас",
      description: "Подробнее о компании Геркулес - её история и контактная информация",
    })
  },
  head: {},
})
</script>

<template>
  <div v-frag>
    <about-header />
    <about-info />
    <about-location />
  </div>
</template>

<style lang="sass" scoped>
section::v-deep
  max-width: 1000px
  margin: 0 auto
</style>
