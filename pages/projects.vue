<script lang="ts">
import { defineComponent, useMeta } from "@nuxtjs/composition-api"

export default defineComponent({
  layout: "nav",
  setup() {
    useMeta({
      title: "Наши проекты",
      description: "Галерея последних проектов, над которыми работала компания Геркулес",
    })
  },
})
</script>

<template>
  <div v-frag>
    <projects-header />
    <projects-content />
  </div>
</template>

<style lang="scss" scoped></style>
