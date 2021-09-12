<template>
  <section id="specialty" class="s-bg--primary-dark">
    <div class="bg">
      <v-container class="text-center container">
        <h2 class="section-title large">Чем мы занимаемся</h2>
        <v-row no-gutters justify="center" class="mx-sm-8 mx-md-16">
          <v-col v-for="(col, colIndex) in cards" :key="`card-col-${colIndex}`" cols="12" sm="6" class="px-xl-16">
            <Card color="primary-dark" :icon="col.icon" class="transparent text--white">
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

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({
  setup() {
    return {
      cards: cards.map((a) => new CardData(...a)),
    }
  },
})

const cards: [string, string, string][] = [
  ["home-city-outline", "Жилые дома", "Мало- и среднеэтажное строительство от получения земли, до сдачи под ключ"],
  ["warehouse", "Склады, Производственные здания, Торговые центры", "Строительство с нуля, ремонт и реконструкции"],
  ["church", "Храмы", "Реставрационные работы на кровлях, куполах, фасадах"],
  ["bridge", "Мосты/Эстакады", "Бетонные работы на опорах и проезжей части мостовых переходов"],
]

class CardData {
  icon: string
  title: string
  text: string

  constructor(icon: string, title: string, text: string) {
    this.icon = icon
    this.title = title
    this.text = text
  }
}
</script>

<style lang="sass" scoped>
#specialty
  position: relative
  display: flex

.bg
  width: 100% //noinspection CssUnknownTarget
  background: linear-gradient(0deg, rgba(26,26,26,0.9), rgba(26,26,26,0.9)), url("~assets/img/city_bg.png") no-repeat center
  background-size: cover

.container
  max-width: 1100px
</style>
