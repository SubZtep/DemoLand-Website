<template lang="pug">
svg.ts(:width="w" :height="h")
</template>

<script lang="ts">
import { setInterval } from "timers"
import { Component, Vue, Prop } from "nuxt-property-decorator"

@Component
export default class NeomAnim extends Vue {
  cnt: number = 1
  max: number = 5
  svg: null

  @Prop({ default: 320 }) w: number
  @Prop({ default: 200 }) h: number

  mounted() {
    setInterval(this.nextPic, 1000)
    //this.nextPic()
  }

  async nextPic() {
    if (this.cnt++ >= this.max) {
      this.cnt = 1
    }

    const svg = await this.$axios.get(`/svg/neon-${this.cnt}.svg`)
    const parser: DOMParser = new DOMParser()
    const doc: Document = parser.parseFromString(svg.data, "image/svg+xml")

    //delete doc.childNodes[1].childNodes[0]
    //console.log("SVG DOC", doc)

    const oSerializer = new XMLSerializer()
    const sXML = oSerializer.serializeToString(doc.childNodes[1])
    this.$el.innerHTML = sXML
  }
}
</script>

<style>
.neon {
  position: absolute;
  height: 100%;
  z-index: 1;
}

.neon rect {
  display: none;
}
</style>
