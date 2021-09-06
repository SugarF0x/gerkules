<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" class="d-lg-none s-bg--primary" right fixed>
      <v-layout class="fill-height" column>
        <v-list class="text-uppercase">
          <v-list-item v-for="link in links" :key="link.text" :to="link.path" :disabled="link.disabled" router exact>
            <v-list-item-content>
              <v-list-item-title>
                {{ link.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-layout>
    </v-navigation-drawer>

    <v-app-bar app class="navbar s-bg--primary">
      <router-link to="/" class="link">
        <v-toolbar-title class="logo">
          <Logo />
          <span> Геркулес </span>
        </v-toolbar-title>
      </router-link>

      <v-spacer />

      <v-toolbar-items class="d-none d-lg-flex">
        <v-btn v-for="link in links" :key="link.text" :to="link.path" :disabled="link.disabled" class="s-bg--secondary">
          {{ link.text }}
        </v-btn>
      </v-toolbar-items>
      <v-app-bar-nav-icon class="d-lg-none" @click="drawer = !drawer" />
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>

    <v-footer app absolute class="s-bg--primary-dark">
      <v-container>
        <v-row>
          <v-col cols="12" sm="4">
            <h3>Сертификации</h3>
            <ul>
              <li><a>Документ о чём-то</a></li>
              <li><a>Сертификат о том-то</a></li>
              <li><a>Публикация об этом-то</a></li>
            </ul>
          </v-col>
          <v-col cols="12" sm="4">
            <h3>Контактная информация</h3>
            <ul>
              <li>Телефон: <a href="tel:88002553535">+7 (915) 150-34-45</a></li>
              <li>E-mail: <a href="mailto:example@example.ru">example@example.ru</a></li>
            </ul>
          </v-col>
          <v-col cols="12" sm="4" class="copyright">
            <Logo class="logo" />
            <div>ООО "Геркулес"</div>
            <div>&copy; 1990 - 2021</div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api"

const links = [
  { text: "О нас", path: "/about", disabled: false },
  { text: "Проекты", path: "/projects", disabled: true },
  { text: "Партнёры", path: "/partners", disabled: true },
]

export default defineComponent({
  name: "Nav",
  setup() {
    const drawer = ref(false)

    return {
      drawer,
      links,
    }
  },
})
</script>

<style lang="sass" scoped>
.logo
  display: flex
  flex-flow: row
  align-items: center
  text-decoration: none
  color: initial
  font-size: 2rem

  span
    margin-left: .5rem

.link
  text-decoration: none

.navbar
  min-height: 56px

.copyright
  display: flex
  flex-flow: column
  align-items: center
  justify-content: center
  text-align: center

.logo
  margin-bottom: .5rem

footer
  text-align: center

  ul
    list-style: none
    padding-left: 0
    a
      text-decoration: underline
</style>
