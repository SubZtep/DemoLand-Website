<template lang="pug">
.container
  h1 About
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  transition: "slide-left",
  head: {
    title: "About"
  }
})
</script>
