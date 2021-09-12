<template>
  <section id="record">
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="4" lg="3">
          <h2 class="display-4 s-text--primary font-weight-bold text-center">250</h2>
        </v-col>
        <v-col cols="12" sm="6" lg="3" class="text-center">
          <h3>Завершённых проектов</h3>
          <p>
            <i>
              над которыми работали
              <br />
              лучшие специалисты в своей области
            </i>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({
  setup() {},
})
</script>

<style lang="sass" scoped>
#record
  color: white
  background-color: black

.card-title
  word-break: normal
</style>
