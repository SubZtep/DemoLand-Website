<template lang="pug">
.wrapper.bg-gray-800
  .z-30.container.bg-red-600.text-center
    h1.text-5xl demo land
    p Welcome to my homepage!
  NeonAnim(:w="414" :h="512")
</template>

<script lang="ts">
import { Component, mixins } from "nuxt-property-decorator"
import TransitionMixin from "~/mixins/transition"
import NeonAnim from "~/components/NeonAnim.vue"
@Component({
  head: { titleTemplate: "demo.land" },
  components: { NeonAnim }
})
export default class HomePage extends mixins(TransitionMixin) {}
</script>
