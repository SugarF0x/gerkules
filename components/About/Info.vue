<template>
  <section id="info">
    <v-container>
      <v-row>
        <v-col cols="12" sm="8" class="order-2 order-sm-1">
          <h2>Геркулес - компания с историей</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt doloribus eos est facilis molestiae quam
            quasi quis? Dicta dolor ipsum maiores minima officia provident quam repellat ullam! Architecto, blanditiis
            corporis est, excepturi maxime modi officia placeat possimus repudiandae sapiente unde?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, amet beatae commodi consequuntur culpa
            dignissimos earum excepturi fuga illo in incidunt laudantium libero magnam maxime, nisi nostrum numquam,
            perspiciatis praesentium quam quisquam ratione rem repellat tempore tenetur vitae! Excepturi, provident.
          </p>
        </v-col>
        <v-col cols="12" sm="4" class="order-1 order-sm-2 pa-0 pa-sm-4">
          <pre-image src="businessman.jpg" aspect-ratio="0.8" />
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

<style lang="sass" scoped></style>
