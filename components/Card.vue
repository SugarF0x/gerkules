<template>
  <v-container class='card fill-height' :class='`s-bg--${color}`'>
    <v-icon size='80'>{{ icon }}</v-icon>
    <h3>
      <slot name='title' />
    </h3>
    <p>
      <slot name='text' />
    </p>
  </v-container>
</template>

<script lang='ts'>
import { defineComponent, PropType } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    color: {
      type: String as PropType<'primary' | 'secondary'>,
      validator: (value: string) => ['primary', 'secondary'].includes(value),
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
})
</script>

<style lang='sass' scoped>
.card
  display: flex
  flex-flow: column
  align-content: center
  text-align: center
  justify-content: flex-start
  padding: 24px
</style>
