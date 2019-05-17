<template lang="pug">
nav(:class="$style.nav")

  div(:class="[$style.up, getUpPath ? 'bg-green-700' : 'bg-red-900']")
    nuxt-link(v-if="getUpPath" :to="getUpPath" ref="up")
      fa.fa-3x(:icon="['fas', 'arrow-alt-up']")
    fa.fa-3x.opacity-50(
      v-else
      :icon="['fas', 'arrow-alt-up']")

  div(:class="[$style.down, getDownPath ? 'bg-green-700' : 'bg-red-900']")
    nuxt-link(v-if="getDownPath" :to="getDownPath" ref="down")
      fa.fa-3x( :icon="['fas', 'arrow-alt-down']")
    fa.fa-3x.opacity-50(
      v-else
      :icon="['fas', 'arrow-alt-down']")

  div(:class="[$style.left, getLeftPath ? 'bg-green-700' : 'bg-red-900']")
    nuxt-link(v-if="getLeftPath" :to="getLeftPath" ref="left")
      fa.fa-3x(:icon="['fas', 'arrow-alt-left']")
    fa.fa-3x.opacity-50(
      v-else
      :icon="['fas', 'arrow-alt-left']")

  div(:class="[$style.right, getRightPath ? 'bg-green-700' : 'bg-red-900']")
    nuxt-link(v-if="getRightPath" :to="getRightPath" ref="right")
      fa.fa-3x(:icon="['fas', 'arrow-alt-right']")
    fa.fa-3x.opacity-50(
      v-else
      :icon="['fas', 'arrow-alt-right']")

</template>

<script lang="ts">
import { Vue, Component, Watch, State, Getter, Action } from "nuxt-property-decorator"
import { Node, Direction } from "~/plugins/rooter" // eslint-disable-line no-unused-vars

enum KeyCode {
  Up = 38, // eslint-disable-line no-unused-vars
  Down = 40, // eslint-disable-line no-unused-vars
  Left = 37, // eslint-disable-line no-unused-vars
  Right = 39 // eslint-disable-line no-unused-vars
}

@Component
export default class HudMapCompComponent extends Vue {
  @State("page", { namespace: "site" }) page: string
  @State("upPath", { namespace: "rooter" }) getUpPath: string
  @State("downPath", { namespace: "rooter" }) getDownPath: string
  @State("leftPath", { namespace: "rooter" }) getLeftPath: string
  @State("rightPath", { namespace: "rooter" }) getRightPath: string
  @Getter("hasSitemap", { namespace: "rooter" }) hasSitemap: boolean
  @Action("setSitemap", { namespace: "rooter" }) setSitemap: Function

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

  created() {
    if (!this.hasSitemap) {
      const sitemap: Node = this.$rooter.getSitemap()
      this.setSitemap(sitemap)
    }

    // Keyboard event
    if (typeof document !== "undefined") {
      document.addEventListener("keyup", e => {
        let way: Direction | null = null
        switch (e.keyCode) {
          case KeyCode.Up:
            way = Direction.Up
            break
          case KeyCode.Down:
            way = Direction.Down
            break
          case KeyCode.Left:
            way = Direction.Left
            break
          case KeyCode.Right:
            way = Direction.Right
            break
        }
        if (way !== null) {
          const ref = this.$refs[way] as Vue
          if (ref) (ref.$el as HTMLElement).click()
        }
      })
    }
  }
}
</script>

<style lang="scss" module>
.nav {
  //transform: perspective(400px) rotateX(45deg);
  //transform: perspective(530px) rotateX(45deg);
  position: absolute;
  // width: 200px;
  // height: 150px;
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

  /* > * {
    background-color: red;
  } */

  /* svg {
    width: 100%;
  } */
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

/* .active {
  fill: yellow;
  .rect {
    transform: translate3d(32px, 32px, 0) scale(0);
  }
  .circle {
    transform: translate3d(-32px, -32px, 0) scale(1.5);
  }
} */
</style>
