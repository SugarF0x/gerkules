<template>
  <section id="about">
    <v-container>
      <v-row no-gutters justify="center">
        <v-col cols="12" lg="10" xl="9" class="d-flex flex-column">
          <h2 class="section-title">О нас</h2>
          <h3 class="display-1">Предоставляем услуги строительных работ с 1994 года</h3>
          <p>Наша основная специализация - мосты, эстакады и жилищное строительство.</p>
          <Link to="/about" class="ml-auto">Подробнее</Link>
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
