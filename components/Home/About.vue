<template>
  <section id='about'>
    <v-container class='d-flex flex-column'>
      <h2 class='section-title'>О нас</h2>
      <h3 class='display-1'>Предоставляем услуги строительных работ с 1994 года</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Alias architecto earum et hic libero, nihil numquam obcaecati omnis
        perferendis quis quisquam quos repellat repudiandae soluta ut.
        Adipisci, blanditiis debitis ducimus eligendi, est, nostrum odit
        pariatur perferendis possimus recusandae similique voluptas.
      </p>
      <Link to='/about' class='ml-auto'>Подробнее</Link>
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
