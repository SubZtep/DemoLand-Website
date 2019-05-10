<template lang="pug">
.wrapper.bg-gray-800
  .container.bg-red-600.text-center
    p
      | Preload and redirect to
      =" "
      nuxt-link(to="/home") home
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
    }, 1000)
  }
}
</script>
