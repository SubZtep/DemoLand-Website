<template lang="pug">
.wrapper.bg-teal-900
  .container.text-center
    h1 Projects 🍩🍦

    p Recent things.

    ul.text-sm.text-red-300.text-left.mx-auto(class="w-1/4")
      li GIF Animation Preview
      li The Hunger Maims
      li Road Pump
      li SQLiteManager
      li Json City
      li Whirled on the Spirit Spiral
      li While Fly
      li Help to Find Cats
      li Basic Pong
</template>

<script lang="ts">
import { Component, mixins } from "nuxt-property-decorator"
import TransitionMixin from "~/mixins/transition"

@Component({
  head: {
    title: "Projects"
  }
})
export default class ProjectsPage extends mixins(TransitionMixin) {}
</script>
