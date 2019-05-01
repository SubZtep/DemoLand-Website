<template lang="pug">
nav(:class="$style.nav")

  .text-center(:class="$style.up")
    i.fas.fa-arrow-alt-up(data-fa-transform="grow-32")
    //-fa(:icon="['fas', 'arrow-alt-up']")
  div(:class="$style.down")
    i.fas.fa-arrow-alt-down(data-fa-transform="grow-32")
    //-fa(:icon="['fas', 'arrow-alt-down']")
  div(:class="$style.left")
    i.fas.fa-arrow-alt-left(data-fa-transform="grow-32")
    //-fa(:icon="['fas', 'arrow-alt-left']")
  div(:class="$style.right")
    i.fas.fa-arrow-alt-right(data-fa-transform="grow-32")
    //-fa(:icon="['fas', 'arrow-alt-right']")


  //-div(
    v-for="neighbour in neighbours"
    :key="neighbour.path"
    :class="$style[neighbour.direction]")
    NLink(:to="neighbour.path")
      | {{ neighbour }}
      //-fa(:icon="['fas', `arrow-alt-${neighbour.direction}`]")

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
  transform: perspective(400px) rotateX(45deg);
  position: absolute;
  width: 200px;
  height: 150px;
  right: 25px;
  bottom: 25px;
  border: 2px solid yellow;
  background-color: black;
  z-index: 1000;
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    ". up ."
    "left . right"
    ". down .";

  > * {
    background-color: red;
    //font-size: 30px;
  }

  svg {
    width: 100%;
  }
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
