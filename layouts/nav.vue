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
</style>
