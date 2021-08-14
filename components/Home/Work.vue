<template>
  <section id='work'>
    <v-row no-gutters>
      <v-col cols='12' sm='4'>
        <Card color='primary' icon='mdi-crane'>
          <template #title> Титул и всякое </template>
          <template #text>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Adipisci autem, consequatur eos maxime nobis repellendus.
              Asperiores beatae cupiditate eligendi sapiente!
            </p>
          </template>
        </Card>
      </v-col>
      <v-col cols='12' sm='4'>
        <Card color='secondary' icon='mdi-account-hard-hat'>
          <template #title>Интересное название</template>
          <template #text>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, voluptatibus.
            </p>
          </template>
        </Card>
      </v-col>
      <v-col cols='12' sm='4'>
        <Card color='primary' icon='mdi-pencil-ruler'>
          <template #title>Что-то важное</template>
          <template #text>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
              aliquam consectetur dignissimos, magni quibusdam sapiente.
            </p>
          </template>
        </Card>
      </v-col>
    </v-row>
  </section>
</template>

<style lang='sass' scoped>

</style>
