<template lang="pug">
.wrapper.bg-gray-800
  .z-30.container.bg-red-600.text-center
    h1.text-5xl demo land
    p Welcome to my homepage!
    p Under Construction for real, as you can see almost empty yet.
    nuxt-link(to="/about/links") Links
    p.inline-block.border-8.border-green-400
      | Check
      =" "
      a(href="/blog") the blog
    //-button.border-8.border-green-400(@click="neon = !neon") Toggle SVG Waves

    //-div(v-if="sitemap")
      Tree(
        :data="sitemap"
        node-text="name"
        layoutType="circular")

  NeonAnim(v-if="neon" :w="414" :h="512")
</template>

<script lang="ts">
import { Component, mixins } from "nuxt-property-decorator"
import TransitionMixin from "~/mixins/transition"
import NeonAnim from "~/components/NeonAnim.vue"

@Component({
  head: { titleTemplate: "demo.land" },
  components: { NeonAnim }
})
export default class HomePage extends mixins(TransitionMixin) {
  neon = false
  sitemap: any = null

  //@State("page", { namespace: "site" }) page: string

  created() {
    //console.log("XXX", this.$rooter.getSitemap())
    // if (typeof window !== "undefined")
    //   setTimeout(() => {
    //     this.sitemap = this.$rooter.getSitemap()
    //     console.log(this.sitemap)
    //   }, 2000)
  }
}
</script>
