<template lang="pug">
div(:class="$style.loading")
  div
    div
      div
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component({
  layout: "empty",
  head: {
    titleTemplate: "demo.land"
  }
})
export default class IndexPage extends Vue {
  mounted() {
    //TODO: preload etc
    setTimeout(() => {
      this.$router.push("/home")
    }, 1900)
  }
}
</script>

<style lang="scss" module>
@keyframes pulse {
  0% {
    border-color: #000;
  }
  50% {
    border-color: #f5a82c;
  }
  100% {
    border-color: #000;
  }
}

.loading {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #008080;
  background: rgb(2, 0, 36);
  background: radial-gradient(circle, #008080 20%, #000 40%);
  z-index: 1000;
  position: fixed;
  div {
    border: 40px dashed #000;
    border-radius: 50%;
    height: calc(100% - 65px);
    animation: pulse 3s infinite;
    opacity: 0.5;
  }
}
</style>
