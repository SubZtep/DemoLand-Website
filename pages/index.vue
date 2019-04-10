<template lang="pug">
.container
  h1 Index
</template>

<script lang="ts">
import { Component, mixins } from "nuxt-property-decorator"
import Transition from "./transition"

@Component({
  head: {
    titleTemplate: "demo.land"
  }
})
export default class IndexPage extends mixins(Transition) {}
</script>
