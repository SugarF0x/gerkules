<template>
  <header id='header' class='bg-image'>
    <v-container class='fill-height'>
      <v-row justify='center' align='center'>
        <v-col cols='10' lg='8'>
          <div class='title-block'>
            <h5 class='company-subtitle'>Производственно-строительная компания</h5>
            <h1 class='company-title'>«Геркулес»</h1>
            <ul class='description-list'>
              <li>Строительство</li>
              <li>Реконструкция</li>
              <li>Ремонт</li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </header>
</template>

<script lang='ts'>
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({
  setup() {

  }
})
</script>

<style lang='sass' scoped>
#header
  display: flex
  align-items: center
  color: white
  min-height: 100vh

.bg-image
  background: linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("~assets/img/header_bg.jpg") no-repeat center
  background-size: cover

.title-block
  text-align: center
  position: relative
  padding: 0 15px

  @media(min-width: 480px)
    font-size: 1.5em
  @media(min-width: 960px)
    font-size: 2em

  @mixin bracket()
    content: ''
    position: absolute
    top: 0
    height: 100%
    width: 10px
    border: 5px solid white

  &:before
    @include bracket()
    left: 0
    border-right: none

  &:after
    @include bracket()
    right: 0
    border-left: none

.company-subtitle
  text-transform: uppercase
  letter-spacing: 3px
  font-weight: 700
  font-family: "Courier New", monospace

.company-title
  margin-bottom: 7px
  font-family: "Book Antiqua", monospace

.description-list
  list-style: none
  padding: 0
  font-size: .9em
  font-weight: 400
  line-height: 1.3
  letter-spacing: .5px
  font-style: italic
  font-family: "Century Gothic", sans-serif
</style>
