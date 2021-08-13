<template>
  <section id='recent'>
    <v-container>
      <h2 class='section-title'>Недавние проекты</h2>
      <h3 class='display-1'>Мы предоставляем широкий спектр услуг</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab earum enim
        expedita hic odio officia quaerat quis quo, quos reiciendis. Aut facere
        impedit laboriosam laborum maiores molestiae necessitatibus, perspiciatis
        sequi unde voluptatem? Aperiam cumque doloremque eius in unde! Impedit, quis?
      </p>
    </v-container>
    <v-row no-gutters>
      <v-col cols='12' md='3'>
        <v-img :src='require("~/assets/img/recent_placeholder_1.jpeg")'/>
      </v-col>
      <v-col cols='12' md='3'>
        <v-img :src='require("~/assets/img/recent_placeholder_2.jpeg")'/>
      </v-col>
      <v-col cols='12' md='3'>
        <v-img :src='require("~/assets/img/recent_placeholder_3.jpeg")'/>
      </v-col>
      <v-col cols='12' md='3'>
        <v-img :src='require("~/assets/img/recent_placeholder_4.jpeg")'/>
      </v-col>
    </v-row>
    <v-container class='d-flex'>
      <Link to='/recent' class='ml-auto'>Подробнее</Link>
    </v-container>
  </section>
</template>

<style lang='sass' scoped>
#recent
  background-color: black
  color: white
</style>
