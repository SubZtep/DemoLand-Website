<template lang="pug">
div
  AppNavigation
  nuxt
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import AppNavigation from "~/components/AppNavigation.vue"

@Component({
  components: {
    AppNavigation
  },
  head: {
    titleTemplate: "demo.land"
  }
})
export default class IndexPage extends Vue {}
</script>

<style lang="scss">
.slide-left-leave {
  transform: translateX(0);
}
.slide-left-leave-to {
  transform: translateX(100%);
}

.slide-left-enter {
  transform: translateX(-100%);
}
.slide-left-enter-to {
  transform: translateX(0);
}

.slide-right-leave {
  transform: translateX(0);
}
.slide-right-leave-to {
  transform: translateX(-100%);
}

.slide-right-enter {
  transform: translateX(100%);
}
.slide-right-enter-to {
  transform: translateX(0);
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 2000ms ease-out;
}
</style>
