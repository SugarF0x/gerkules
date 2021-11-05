<template>
  <header id="header">
    <h1>О нас</h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({
  setup() {},
})
</script>

<style lang="sass" scoped>
#header
  background: linear-gradient(0deg, rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url("~assets/img/about_bg.webp") no-repeat center
  background-size: cover
  min-height: 10vw
  display: flex
  flex-flow: column
  justify-content: center
  align-items: center
  color: white
</style>
