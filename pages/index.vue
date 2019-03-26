<template lang="pug">
div
  h1 Index
  HelloWorld
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import HelloWorld from "~/components/HelloWorld.vue"

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" module>
</style>
