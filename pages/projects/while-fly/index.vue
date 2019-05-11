<template lang="pug">
.wrapper.bg-teal-900
  .container.text-center
    h1 While Fly
    p 2016
    img.icon(src="/images/projects/whilefly_icon.png" alt="App Icon")

    a.m-3(href="https://demo.land/whilefly/" target="_blank") Page
    a.m-3(href="https://subztep.itch.io/whilefly" target="_blank") Itch.io
    a.m-3(href="https://play.google.com/store/apps/details?id=land.demo.whilefly" target="_blank") Google Play
</template>

<script lang="ts">
import { Component, mixins } from "nuxt-property-decorator"
import TransitionMixin from "~/mixins/transition"

@Component({ head: { title: "While Fly" } })
export default class WhileFlyPage extends mixins(TransitionMixin) {}
</script>
