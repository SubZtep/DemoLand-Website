<template lang="pug">
.wrapper.bg-gray-700
  .container.bg-red-600.text-center
    h1 About
    p My name is Andras Serfozo, the nickname is SubZtep at places.
    p I’m programming computers, web stuff, sometimes games and experiences.
</template>

<script lang="ts">
import { Component, mixins } from "nuxt-property-decorator"
import TransitionMixin from "~/mixins/transition"

@Component({
  head: {
    title: "Links"
  }
})
export default class AboutLinksPage extends mixins(TransitionMixin) {}
</script>
