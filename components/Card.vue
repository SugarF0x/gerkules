<template>
  <v-container class="card fill-height" :class="`s-bg--${color}`">
    <v-icon size="80">{{ `mdi-${icon}` }}</v-icon>
    <h3>
      <slot name="title" />
    </h3>
    <slot name="text" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api"

const ColorUnion = ["primary", "secondary", "primary-dark", "secondary-dark"] as const
type ColorUnionType = typeof ColorUnion[number]

export default defineComponent({
  props: {
    color: {
      type: String as PropType<ColorUnionType>,
      validator: (value: ColorUnionType) => ColorUnion.includes(value),
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="sass" scoped>
.card
  display: flex
  flex-flow: column
  align-content: center
  text-align: center
  justify-content: flex-start
  padding: 24px
</style>
