<template lang="pug">
.wrapper.bg-teal-900
  .container.text-center
    h1 Help to Find Cats
    p 2016
    img.icon(src="/images/projects/helptofindcats_icon.png" alt="App Icon")

    a.m-3(href="https://devpost.com/software/help-to-find-cats" target="_blank") Page
    a.m-3(href="https://play.google.com/store/apps/details?id=land.demo.cats" target="_blank") Google Play
    a.m-3(href="https://www.amazon.co.uk/Andras-Serfozo-Help-Find-Cats/dp/B01F18KH4Y/" target="_blank") Amazon Appstore
</template>

<script lang="ts">
import { Component, mixins } from "nuxt-property-decorator"
import TransitionMixin from "~/mixins/transition"

@Component({ head: { title: "Help to Find Cats" } })
export default class HelpToFindCatsPage extends mixins(TransitionMixin) {}
</script>
