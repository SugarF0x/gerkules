<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"
import { Project } from "~/assets/types"

// test change to affect patch version (current 0.4.1)

const CONTENT: Project[] = [
  {
    code: "yakimanka",
    title: "Офисно-торговый центр Якиманка 26, г. Москва",
    description: "Комплексная реконструкция с заменой инженерных систем и финишной отделкой под ключ, включая фасады.",
    images: 4,
  },
  {
    code: "bogorod",
    title: "Храм Рождества Богородицы Солотчинского женского монсатыря в Рязанской области",
    description:
      "Реставрационные работы, включая замену стропильной системы и кровли на медную, ремонт фасадов, карнизов, включая штукатурку и окраску.",
    images: 4,
  },
  {
    code: "rostov-bridge",
    title: "Мостовой переход через реку Дон автомобильной дороги М-4",
    description: "Устройство железобетонных опор моста и монолитной проезжей части",
    images: 7,
  },
  {
    code: "norway-observatory",
    title: "Зональная гидрометеорологическая обсерватория, архипелаг Шипцберген, Норвегия",
    description:
      "Комплексная реконструкция, включая замену несущих конструкций и финишную отделку зональной гидрометеорологической обсерватории Мурманского УГМС Росгидрометра РФ, посёлок Баренцбург, Шпицберген, Норвегия.",
    images: 4,
  },
  {
    code: "crimea-bridge",
    title: "Крымский мост",
    description: "Устройство железобетонных опор мостового перехода через Керченский пролив",
    images: 5,
  },
]

export default defineComponent({
  setup() {
    return {
      CONTENT,
    }
  },
})
</script>

<template>
  <section id="projects">
    <projects-project v-for="(project, index) in CONTENT" :key="index" :project="project" />
  </section>
</template>

<style lang="scss" scoped></style>
