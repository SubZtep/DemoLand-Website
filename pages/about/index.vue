<template lang="pug">
.wrapper.bg-teal-900
  .container.text-center
    h1 About ☕
    p My name is Andras Serfozo, the nickname is SubZtep at places.
    p I’m programming computers, web stuff, sometimes games and experiences.
</template>

<script lang="ts">
import { Component, mixins } from "nuxt-property-decorator"
import TransitionMixin from "~/mixins/transition"

@Component({
  head: {
    title: "About"
  }
})
export default class AboutPage extends mixins(TransitionMixin) {}
</script>
