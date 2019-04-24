<template lang="pug">
.container.bg-gray-700
  h1 About
</template>

<script lang="ts">
import { Component, mixins } from "nuxt-property-decorator"
import TransitionMixin from "~/mixins/transition"

@Component({
  head: {
    title: "About"
  }
})
export default class IndexPage extends mixins(TransitionMixin) {}
</script>
