<template lang="pug">
.wrapper.bg-gray-700
  .container.bg-red-600.text-center
    h1 Links
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
