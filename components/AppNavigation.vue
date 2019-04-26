<template lang="pug">
nav(:class="$style.nav")

  div(v-for="neighbour in neighbours")
    NLink(
      :to="neighbour.path"
      :class="$style[neighbour.direction]"
    )
      fa(:icon="['fas', `arrow-alt-${neighbour.direction}`]")

  //-
    nuxt-link(to="/about") about
    =" - "
    nuxt-link(to="/" exact class="hover:text-blue-200") index
    =" - "
    nuxt-link(to="/projects") projects

  //-svg(
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
import { Vue, Component, Watch } from "nuxt-property-decorator"
import { State } from "vuex-class"
// eslint-disable-next-line no-unused-vars
import { Neighbour } from "~/plugins/rooter/plugin"

@Component
export default class AppNavigationComponent extends Vue {
  neighbours: Neighbour[] = []

  @State("page", { namespace: "site" }) page: string

  @Watch("$route", { immediate: true, deep: true })
  onUrlChange(newVal: any) {
    this.neighbours = (this as any).$rooter.getNeighbours()
  }
}
</script>

<style lang="scss" module>
.nav {
  position: absolute;
  right: 25px;
  bottom: 25px;
  border: 2px solid yellow;
  background-color: black;
  z-index: 1000;
  display: grid;
  gap: 15px;
  grid-template-areas:
    ". up ."
    "left . right"
    ". down .";
}

.up {
  grid-area: up;
}

.down {
  grid-area: down;
}

.left {
  grid-area: left;
}

.right {
  grid-area: right;
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
