<template lang="pug">
.container
  h1 Projects
  p Some random project
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  transition: "slide-right",
  head: {
    title: "Projects"
  }
})
</script>
