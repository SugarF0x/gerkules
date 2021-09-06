<template>
  <v-btn nuxt tile elevation="0" :to="to" color="#FFCE3E" class="link-button" :disabled="disabled">
    <slot />
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({
  props: {
    to: {
      type: String,
      default: "/",
    },
    disabled: Boolean,
  },
})
</script>

<style lang="sass" scoped>
.link-button
  padding: 6px 30px !important
  font-family: "Courier New", monospace

  p + &
    margin-top: 6px
</style>
