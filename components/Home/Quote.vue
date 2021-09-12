<template>
  <section id="quote" class="text-center">
    <v-icon color="white" size="80">mdi-book-open-page-variant</v-icon>
    <p class="text text-justify text-sm-center">
      "Существуют две истины – о страдании и возникновении страдания. Главная причина страданий – в неуемности
      человеческих желаний. Однако эти желания не ведут к счастью. Они либо неисполнимы, и это приносит печаль, либо
      исполняются, и тогда мы убеждаемся в эфемерности своего счастья, а страх потери лишает его смысла. Но мы
      продолжаем желать вновь и вновь, и именно эта ненасытная жажда толкает нас от одной вереницы страданий к другой."
    </p>
    <h4 class="author">- Сиддхартха Гаутама</h4>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({
  setup() {},
})
</script>

<style lang="sass" scoped>
#quote
  //noinspection CssUnknownTarget
  background: linear-gradient(0deg, rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url("~assets/img/worker_bg.jpg") no-repeat center
  background-size: cover
  padding: 48px
  color: white

  @media(min-width: 960px)
    padding: 48px 96px
  @media(min-width: 1264px)
    padding: 48px 192px
  @media(min-width: 1904px)
    padding: 48px 384px

.text
  font-style: italic

.author
  font-family: "Courier New", monospace
  margin-top: 16px
  font-size: 1.2em
</style>
