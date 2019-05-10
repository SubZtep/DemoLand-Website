<template lang="pug" functional>
div(:class="[$style.arrow, $style[prop.arrow]")
  i(:class="[prop.active ?, `fa-arrow-alt-${prop.arrow}`]")
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"
import { Direction } from "~/plugins/rooter" // eslint-disable-line no-unused-vars

@Component
export default class AppNavigationComponent extends Vue {
  @Prop({ required: true }) arrow: Direction
  @Prop({ default: true }) active: boolean
}
</script>

<style lang="scss" module>
.arrow {
  text-align: center;
}

.arrow i {
  font-size: 2rem;
  filter: drop-shadow(8px 8px 2px black);
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
