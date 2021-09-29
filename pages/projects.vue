<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({
  layout: "nav",
  setup() {},
})
</script>

<template>
  <div v-frag>
    <projects-header />
    <projects-content />
  </div>
</template>

<style lang="scss" scoped></style>
