<template>
  <section id='record'>
    <v-container>
      <v-row justify='center' align='center'>
        <v-col cols='12' sm='4' lg='3'>
          <h2 class='display-4 s-text--primary font-weight-bold text-center'>255</h2>
        </v-col>
        <v-col cols='12' sm='6' lg='3' class='text-center'>
          <h3>Завершённых проектов</h3>
          <p>
            <i>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur culpa, eum fugit harum id itaque laudantium
              officiis perferendis praesentium sapiente.
            </i>
          </p>
        </v-col>
        <v-col cols='12' sm='10' md='8' lg='4'>
          <v-card tile>
            <v-card-title class='s-bg--primary-dark card-title'>Моделирование информации по задаче</v-card-title>
            <v-card-text class='s-bg--primary pt-5'>
              <p class='mt-0'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ab accusamus assumenda cumque eius ipsum iure laudantium
                optio, vel vitae? Perspiciatis.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang='ts'>
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({
  setup() {

  }
})
</script>

<style lang='sass' scoped>
#record
  color: white
  background-color: black

.card-title
  word-break: normal
</style>
