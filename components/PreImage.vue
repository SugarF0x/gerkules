<template>
  <v-img
    :src="properSrc"
    :lazy-src="lazySrc"
    :aspect-ratio='aspectRatio'
  >
    <template #placeholder>
      <v-row
        class="fill-height ma-0"
        align="center"
        justify="center"
      >
        <v-progress-circular
          indeterminate
          color="grey lighten-5"
        />
      </v-row>
    </template>
  </v-img>
</template>

<script lang='ts'>
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true
    },
    aspectRatio: {
      type: [Number, String],
      default: 1
    }
  },
  setup(props) {
    const { src } = toRefs(props)

    const properSrc = computed(() => {
      return require(`~/assets/img/${src.value}`)
    })

    const lazySrc = computed(() => {
      return `/_ipx/${src.value}?w=16`
    })

    return {
      properSrc,
      lazySrc
    }
  }
})
</script>
