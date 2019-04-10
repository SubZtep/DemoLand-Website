<template lang="pug">
.container
  h1 Projects
  p Some random project
</template>

<script lang="ts">
import { Component, mixins } from "nuxt-property-decorator"
import Transition from "./transition"

@Component
export default class IndexPage extends mixins(Transition) {
  head: {
    title: "Projects"
  }
}
</script>
