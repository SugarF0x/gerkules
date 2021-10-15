<template>
  <div class="logo">
    <v-img src="/logo_white_lq_min.png" class="image" height="48" width="48" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({
  setup() {},
})
</script>

<style lang="sass" scoped>
.logo, .image
  display: inline-block

.logo
  display: flex
  align-items: center
</style>
