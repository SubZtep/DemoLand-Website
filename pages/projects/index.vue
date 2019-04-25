<template lang="pug">
.wrapper.bg-gray-700
  .container.bg-red-600
    h1 Projects
    ul
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
