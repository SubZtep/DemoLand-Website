<template lang="pug">
.container.bg-gray-900
  h1 Projects
  p Some random project
</template>

<script lang="ts">
import { Component, mixins } from "nuxt-property-decorator"
import TransitionMixin from "~/mixins/transition"

@Component({
  head: {
    title: "Projects"
  }
})
export default class IndexPage extends mixins(TransitionMixin) {}
</script>
