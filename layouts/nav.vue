<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" class="d-sm-none" dark right fixed>
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

    <v-app-bar app class="navbar" dark>
      <router-link to="/" class="link">
        <v-toolbar-title class="logo">
          <Logo />
          <span> hercules </span>
        </v-toolbar-title>
      </router-link>

      <v-spacer />

      <v-toolbar-items class="d-none d-sm-flex">
        <v-btn v-for="link in links" :key="link.text" :to="link.path" :disabled="link.disabled">
          {{ link.text }}
        </v-btn>
      </v-toolbar-items>
      <v-app-bar-nav-icon class="d-sm-none" @click="drawer = !drawer" />
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>

    <v-footer app absolute class="s-bg--primary-dark">
      <v-container>
        <v-row>
          <v-col cols="12" sm="4">
            <h3>Контактные номера</h3>
            <ul v-if="PHONES.length">
              <li v-for="phone in PHONES" :key="phone">
                <a :href="`tel:${phone}`">{{ formatPhone(phone) }}</a>
              </li>
            </ul>
            <div v-else>
              На данный момент телефонные номера недоступны
            </div>
          </v-col>
          <v-col cols="12" sm="4" class="copyright">
            <Logo class="logo" />
            <div>ООО "Геркулес"</div>
            <div>&copy; 1990 - 2021</div>
          </v-col>
          <v-col cols="12" sm="4">
            <h3>Контактные почты</h3>
            <ul>
              <li v-for="mail in MAILS" :key="mail">
                <a :href="`mailto:${mail}`">{{ mail }}</a>
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api"
import { PHONES, MAILS } from "~/assets/consts"
import { formatPhone } from "~/assets/util"

const links = [
  { text: "О нас", path: "/about", disabled: false },
  { text: "Проекты", path: "/projects", disabled: false },
  { text: "Партнёры", path: "/partners", disabled: true },
]

export default defineComponent({
  name: "Nav",
  setup() {
    const drawer = ref(false)

    return {
      drawer,
      links,
      PHONES,
      MAILS,
      formatPhone,
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
  font-size: 2rem
  color: white
  font-family: 'Ganimed', sans-serif

  span
    margin-left: .5rem

.link
  text-decoration: none

.toolbar
  padding-right: 0

.navbar
  min-height: 56px

.copyright
  display: flex
  flex-flow: column
  align-items: center
  justify-content: center
  text-align: center

footer
  text-align: center

  .logo
    margin-bottom: .5rem

  ul
    list-style: none
    padding-left: 0
    a
      text-decoration: underline
</style>

<style lang="sass"></style>
