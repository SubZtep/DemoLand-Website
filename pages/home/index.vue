<template lang="pug">
.wrapper.bg-gray-800
  .container.bg-red-600.text-center
    h1.text-5xl demo land
    p Welcome to my homepage!
</template>

<script lang="ts">
import { Component, mixins } from "nuxt-property-decorator"
import TransitionMixin from "~/mixins/transition"

@Component({
  head: {
    titleTemplate: "demo.land"
  }
})
export default class HomePage extends mixins(TransitionMixin) {}
</script>
