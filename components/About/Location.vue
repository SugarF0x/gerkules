<template>
  <section id="location">
    <v-container class="pb-0">
      <v-row>
        <v-col cols="12" sm="6" class="order-1 order-sm-2">
          <h2>Где мы находимся</h2>

          <p>
            Московская&nbsp;обл., Пушкинский&nbsp;р-н, пос.&nbsp;Лесные&nbsp;Поляны,
            мкр&#8288;&#8211;&#8288;н&nbsp;Полянка, д.43.
          </p>
        </v-col>
        <v-col cols="12" sm="6" class="order-2 order-sm-1 pa-0 pa-sm-4">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Afc0a8c44faa48fe7e9d3d94688bc46bd02c59f8833aa421a58f8b0aa2c8dc967&amp;source=constructor"
            width="100%"
            height="450"
          />
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
iframe
  border: 0
  min-height: 450px
  background-color: lightgray
</style>
