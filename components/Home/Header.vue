<template>
  <header>
    <div class='bg-image' />
    <v-container class='fill-height'>
      <v-row justify='center' align='center'>
        <v-col cols='10'>
          <div class='title-block'>
            <h4 class='company-subtitle'>Производственно-строительная компания</h4>
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

<style lang='sass' scoped>
header
  display: flex
  align-items: center
  position: relative
  color: white
  background-color: black
  z-index: 0
  min-height: 100vh

.bg-image
  position: absolute
  width: 100%
  height: 100%
  opacity: .4
  z-index: -1
  background: url("~assets/img/header_bg.jpg") no-repeat center
  background-size: cover

.title-block
  text-align: center
  position: relative
  padding: 0 15px

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
  font-weight: 400
  letter-spacing: 1.5px

.company-title
  margin-bottom: 7px
  font-family: "Century Gothic", sans-serif

.description-list
  list-style: none
  padding: 0
  font-size: .9em
  font-weight: 400
  line-height: 1.3
  letter-spacing: .5px
  font-style: italic
</style>
