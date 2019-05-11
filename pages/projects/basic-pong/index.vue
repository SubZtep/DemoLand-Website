<template lang="pug">
.wrapper.bg-teal-900
  .container.text-center
    h1 Basic Pong
    p 2015
    img.icon(src="/images/projects/basicpong_icon.png" alt="App Icon")
    a(href="https://www.amazon.co.uk/Andras-Serfozo-Basic-Pong/dp/B01H2M5EK4/" target="_blank")
      | Amazon Appstore
</template>

<script lang="ts">
import { Component, mixins } from "nuxt-property-decorator"
import TransitionMixin from "~/mixins/transition"

@Component({ head: { title: "Basic Pong" } })
export default class BasicPongPage extends mixins(TransitionMixin) {}
</script>
