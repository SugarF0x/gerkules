<template>
  <section id="partners">
    <v-container>
      <v-row no-gutters justify="center">
        <v-col cols="12" lg="10" xl="9" class="d-flex flex-column">
          <h2 class="section-title">Наши партнёры</h2>
          <h3 class="display-1">Мы работаем для достижения лучших результатов</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem beatae blanditiis delectus ea facere
            fugit, harum illum, incidunt laudantium libero qui, quisquam sit tempora tenetur veritatis voluptatem
            voluptatibus? Eos, perspiciatis, ratione! Accusantium autem delectus dolorem laborum natus, officiis rem!
          </p>
          <Link to="/partners" class="ml-auto" disabled>Подробнее</Link>
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
