<template>
  <footer id='footer'>
    <v-row no-gutters>
      <v-col cols='12' sm='4'>
        <Card color='primary' icon='phone'>
          <template #title>Позвоните нам</template>
          <template #text>
            <ul class='list'>
              <li><a href='tel:88002553535'>+7 (915) 150-34-45</a></li>
              <li><a href='tel:89852252525'>+7 (985) 225-25-25</a></li>
            </ul>
          </template>
        </Card>
      </v-col>
      <v-col cols='12' sm='4'>
        <Card color='secondary' icon='email'>
          <template #title>Напишите нам</template>
          <template #text>
            <ul class='list'>
              <li><a href='mailto:example@example.ru'>example@example.ru</a></li>
              <li><a href='mailto:sugarfox@sugarfox.ru'>sugarfox@sugarfox.ru</a></li>
            </ul>
          </template>
        </Card>
      </v-col>
      <v-col cols='12' sm='4'>
        <Card color='primary' icon='book'>
          <template #title>Приезжайте к нам</template>
          <template #text>
            <p>
              Московская область, Пушкинский район
              <br>
              р-н Лесные поляны, м-н Полянка, д28а
            </p>
          </template>
        </Card>
      </v-col>
    </v-row>
  </footer>
</template>

<script lang='ts'>
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({
  setup() {

  }
})
</script>

<style lang='sass' scoped>
.list
  list-style: none
  padding: 0
</style>
