<template>
  <section id='quote' class='text-center'>
    <v-icon color='white' size='80'>mdi-book-open-page-variant</v-icon>
    <p class='text text-justify text-sm-center'>
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
      esse facilis, in iste laboriosam laborum. Accusamus adipisci dolorem ea,
      et ipsum optio temporibus voluptate! A architecto at cumque dolor eveniet
      laudantium nisi quasi repellendus ullam velit. Aliquid amet aut autem
      deleniti ducimus ea error facere iusto laborum laudantium mollitia nam
      omnis placeat quas, quasi quod repudiandae rerum sequi sint sit, veritatis
      vitae voluptas voluptatum. Adipisci cupiditate enim exercitationem fugit
      mollitia quibusdam repellat tenetur. Deserunt itaque labore tenetur
      voluptate. Error, expedita?"
    </p>
    <h4 class='author'>- Вильям Шекспир, 2012г н.э.</h4>
  </section>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {

  }
})
</script>

<style lang='sass' scoped>
#quote
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
