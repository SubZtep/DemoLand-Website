<template lang="pug">
nav
  .text-center
    nuxt-link(to="/about") about
    =" - "
    nuxt-link(to="/" exact class="hover:text-blue-200") index
    =" - "
    nuxt-link(to="/projects") projects

  svg(
    :class="{ 'active' : (page === 'index') }"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 128 128")

    transition-group(
      name="list"
      tag="g")

      rect.items.rect(ref="rect" x="32" y="32" key="rect" width="64" height="64")
      circle.items.circle(key="circ" cx="64" cy="64" r="32")
</template>

<script lang="ts">
import Vue from "vue"
import { mapState } from "vuex"

export default Vue.extend({
  computed: mapState("site", ["page"])
})
</script>

<style lang="scss" scoped>
.items {
  transition: all 1s ease;
}

.active {
  fill: yellow;
  .rect {
    transform: translate3d(32px, 32px, 0) scale(0);
  }
  .circle {
    transform: translate3d(-32px, -32px, 0) scale(1.5);
  }
}
</style>
