<template>
  <section id='recent'>
    <v-container class='text-center'>
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
      <v-col
        v-for='n in 4'
        :key='`recentImage${n}`'
        cols='12'
        md='3'
      >
        <pre-image
          :src='`recent_placeholder_${n}.jpeg`'
          aspect-ratio='1.5'
        />
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
