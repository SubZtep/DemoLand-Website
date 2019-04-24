<template lang="pug">
nav(:class="$style.nav")
  .text-center
    nuxt-link(to="/about") about
    =" - "
    nuxt-link(to="/" exact class="hover:text-blue-200") index
    =" - "
    nuxt-link(to="/projects") projects

  svg(
    :class="{ [$style.active]: (page === 'index') }"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 128 128")

    transition-group(
      name="list"
      tag="g")

      rect(:class="[$style.items, $style.rect]" ref="rect" x="32" y="32" key="rect" width="64" height="64")
      circle(:class="[$style.items, $style.circle]" key="circ" cx="64" cy="64" r="32")
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import { State } from "vuex-class"

@Component
export default class AppNavigationComponent extends Vue {
  @State("page", { namespace: "site" }) page: string
}
</script>

<style lang="scss" module>
.nav {
  position: absolute;
  top: 0;
  border: 2px solid yellow;
  background-color: black;
  margin: 0 auto;
  z-index: 1000;
  left: 45%;
}

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
