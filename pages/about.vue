<template lang="pug">
.container
  h1 About
</template>

<script lang="ts">
import { Component, mixins } from "nuxt-property-decorator"
import Transition from "./transition"

@Component({
  head: {
    title: "About"
  }
})
export default class IndexPage extends mixins(Transition) {}
</script>
