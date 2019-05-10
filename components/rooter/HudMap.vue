<template lang="pug">
nav(:class="$style.nav")

  .text-center(:class="$style.up")
    fa.fa-3x(
      @click="navTo('up')"
      :class="{'opacity-50': !$rooter.canNavTo('up')}"
      :icon="['fas', 'arrow-alt-up']")

  div(:class="$style.down")
    fa.fa-3x(
      @click="navTo('down')"
      :class="{'opacity-50': !$rooter.canNavTo('down')}"
      :icon="['fas', 'arrow-alt-down']")

  div(:class="$style.left")
    fa.fa-3x(
      @click="navTo('left')"
      :class="{'opacity-50': !$rooter.canNavTo('left')}"
      :icon="['fas', 'arrow-alt-left']")

  div(:class="$style.right")
    fa.fa-3x(
      @click="navTo('right')"
      :class="{'opacity-50':  !$rooter.canNavTo('right')}"
      :icon="['fas', 'arrow-alt-right']")

</template>

<script lang="ts">
import { Vue, Component, Watch, State } from "nuxt-property-decorator"
import { Direction } from "~/plugins/rooter" // eslint-disable-line no-unused-vars

@Component
export default class HudMapCompComponent extends Vue {
  @State("page", { namespace: "site" }) page: string

  @Watch("$route", { immediate: true, deep: true })
  onUrlChange(newVal: any) {
    this.$forceUpdate()
  }

  /**
   * Navigate to the selected page
   */
  navTo(way: Direction) {
    const n = this.$rooter.getNeighbour(way)
    if (n) {
      this.$router.push(n.path)
    }
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
    cursor: pointer;
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
