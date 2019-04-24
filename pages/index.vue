<template lang="pug">
.container.bg-gray-800
  h1 Index
</template>

<script lang="ts">
import { Component, mixins } from "nuxt-property-decorator"
import TransitionMixin from "~/mixins/transition"

@Component({
  head: {
    titleTemplate: "demo.land"
  }
})
export default class IndexPage extends mixins(TransitionMixin) {
  created() {
    console.log("hello")
  }
}
</script>
