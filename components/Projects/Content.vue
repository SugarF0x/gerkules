<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"
import { Project } from "~/assets/types"

const CONTENT: Project[] = [
  {
    code: "ioann",
    title: "Иоанно-Богословский монастырь",
    description: "Реставрационные работы братского корпуса Иоанно-Богословского монастыря",
    images: 4,
  },
]

export default defineComponent({
  setup() {
    return {
      CONTENT,
    }
  },
})
</script>

<template>
  <section id="projects">
    <projects-project v-for="(project, index) in CONTENT" :key="index" :project="project" />
  </section>
</template>

<style lang="scss" scoped></style>
