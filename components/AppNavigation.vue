<template lang="pug">
  nav-arrow(:active="true" :class="[$style.arrow, $style.up]")

//-  div(:class="[$style.arrow, $style.up]")
    i.fal.fa-arrow-alt-up

  div(:class="[$style.arrow, $style.down]")
    i.fas.fa-arrow-alt-down

  div(:class="[$style.arrow, $style.left]")
    i.fas.fa-arrow-alt-left

  div(:class="[$style.arrow, $style.right]")
    i.fas.fa-arrow-alt-right


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
import { Neighbour } from "~/plugins/rooter"

@Component({
  components: {
    AppNavigationComponent: "nav-arrow"
  }
})
export default class AppNavigationComponent extends Vue {
  neighbours: Neighbour[] = []

  @State("page", { namespace: "site" }) page: string

  @Watch("$route", { immediate: true, deep: true })
  onUrlChange(newVal: any) {
    this.neighbours = (this as any).$rooter.getNeighbours()
    console.log("this.neighbours", this.neighbours)
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
  gap: 8px;
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
}

.arrow {
  text-align: center;
}

.arrow i {
  font-size: 2rem;
  filter: drop-shadow(8px 8px 2px black);
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
