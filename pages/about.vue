<template>
  <div v-frag>
    <about-header />
    <about-info />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({
  layout: "nav",
  setup() {},
})
</script>

<style lang="sass" scoped></style>
