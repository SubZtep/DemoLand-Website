<template lang="pug">
div
  AppNavigation
  nuxt
</template>

<script lang="ts">
import Vue from "vue"
import AppNavigation from "~/components/AppNavigation.vue"

export default Vue.extend({
  components: {
    AppNavigation
  },
  head: {
    title: "About"
  }
})
</script>

<style lang="scss">
.page-enter-active {
  transition: all 0.5s ease;
  transform: translateX(0);
  //transition: opacity 0.25s ease-out;
}
.page-leave-active {
  transition: all 0.5s ease;
  transform: translateX(0);
  //transition: opacity 0.25s ease-in;
}
.page-enter,
.page-leave-active {
  transition: all 0.5s ease;
  transform: translateX(100%);
}

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
  transition: transform 500ms ease-out;
}
</style>
