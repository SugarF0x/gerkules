<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api"
import { Project } from "~/assets/types"

export default defineComponent({
  props: {
    project: {
      type: Object as PropType<Project>,
      required: true,
    },
  },
  setup() {},
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3">
        <v-carousel height="auto">
          <v-carousel-item v-for="n in project.images" :key="n">
            <pre-image :src="`projects/${project.code}/${n}.jpg`" />
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" md="9">
        <div class="title">{{ project.title }}</div>
        <div>{{ project.description }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped></style>
