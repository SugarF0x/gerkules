<template>
  <section id='specialty' class='s-bg--primary-dark'>
    <div class='bg'>
      <v-container class='text-center'>
        <h2 class='section-title'>Чем мы занимаемся</h2>
        <h3 class='dispaly-1'>Сертификации компании</h3>
        <p class='mx-sm-8 mx-md-16'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad
          alias aliquid aspernatur at aut culpa cum dicta ea eos inventore itaque
          laudantium magni nobis nostrum officia omnis pariatur qui totam,
          voluptate. Atque consequuntur ea et in incidunt neque sed.
        </p>
        <v-row
          no-gutters
          justify='center'
          class='mx-sm-8 mx-md-16'
        >
          <v-col
            v-for='(col, colIndex) in cards'
            :key='`card-col-${colIndex}`'
            cols='12'
            sm='6'
            md='4'
            class='px-xl-16'
          >
            <Card color='primary-dark' :icon='col.icon' class='transparent text--white'>
              <template #title>{{ col.title }}</template>
              <template #text>
                <p>
                  {{ col.text }}
                </p>
              </template>
            </Card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </section>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const cards: [string, string][] = [
      ['home-city-outline', 'Дома'],
      ['warehouse', 'Склады'],
      ['church', 'Храмы'],
      ['bridge', 'Мосты'],
      ['road-variant', 'Дороги'],
      ['highway','Автострады']
    ]

    return {
      cards: cards.map(a => new CardData(...a))
    }
  }
})

const SampleText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, laboriosam?'

class CardData {
  icon: string
  title: string
  text: string

  constructor(icon: string, title: string, text = SampleText) {
    this.icon = icon
    this.title = title
    this.text = text
  }
}
</script>

<style lang='sass' scoped>
#specialty
  position: relative
  display: flex

.bg
  width: 100%
  background: linear-gradient(0deg, rgba(26,26,26,0.9), rgba(26,26,26,0.9)), url("/img/city_bg.png") no-repeat center
  background-size: cover
</style>
