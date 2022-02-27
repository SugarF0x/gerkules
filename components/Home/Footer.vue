<template>
  <footer id="footer">
    <v-row no-gutters>
      <v-col cols="12" sm="4">
        <Card color="primary" icon="phone">
          <template #title>Позвоните нам</template>
          <template #text>
            <ul v-if="PHONES.length" class="list">
              <li v-for="phone in PHONES" :key="phone">
                <a :href="`tel:${phone}`">{{ formatPhone(phone) }}</a>
              </li>
            </ul>
            <div v-else>
              На данный момент телефонные номера недоступны
            </div>
          </template>
        </Card>
      </v-col>
      <v-col cols="12" sm="4">
        <Card color="secondary" icon="email">
          <template #title>Напишите нам</template>
          <template #text>
            <ul class="list">
              <li v-for="mail in MAILS" :key="mail">
                <a :href="`mailto:${mail}`">{{ mail }}</a>
              </li>
            </ul>
          </template>
        </Card>
      </v-col>
      <v-col cols="12" sm="4">
        <Card color="primary" icon="home-map-marker">
          <template #title>Приезжайте к нам</template>
          <template #text>
            Московская область, Пушкинский район
            <br />
            посёлок Лесные поляны, микрорайон Полянка, дом 43
          </template>
        </Card>
      </v-col>
    </v-row>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"
import { MAILS, PHONES } from "~/assets/consts"
import { formatPhone } from "~/assets/util"

export default defineComponent({
  setup() {
    return {
      MAILS,
      PHONES,
      formatPhone,
    }
  },
})
</script>

<style lang="sass" scoped>
.list
  list-style: none
  padding: 0
</style>
