<template lang="pug">
svg.neon(:src="`/svg/neon-${cnt}.svg`" :width="w" :height="h")
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"

@Component
export default class NeomAnim extends Vue {
  way: number = 1
  cnt: number = 1
  max: number = 35
  svgs: string[] = []

  start: DOMHighResTimeStamp | null = null

  @Prop({ default: 320 }) w: number
  @Prop({ default: 200 }) h: number

  mounted() {
    //setInterval(this.nextPic, 60)
    window.requestAnimationFrame(this.step)
  }

  async step(timestamp: DOMHighResTimeStamp) {
    if (this.start === null) {
      this.start = timestamp
    }
    const progress = timestamp - this.start

    this.cnt += this.way
    if (this.cnt >= this.max || this.cnt <= 1) {
      this.way = -this.way
    }

    if (typeof this.svgs[this.cnt] === "undefined") {
      const svg = await this.$axios.get(`/svg/neon-${this.cnt}.svg`)
      const parser: DOMParser = new DOMParser()
      const doc: Document = parser.parseFromString(svg.data, "image/svg+xml")

      //delete doc.childNodes[1].childNodes[0]
      //console.log("SVG DOC", doc)

      const oSerializer = new XMLSerializer()
      this.svgs[this.cnt] = oSerializer.serializeToString(doc.childNodes[1])
    }

    this.$el.innerHTML = this.svgs[this.cnt]

    console.log("progress", progress)
    //if (progress < 2000) {
    window.requestAnimationFrame(this.step)
    //}
  }
}
</script>

<style>
.neon {
  position: absolute;
  height: 100%;
  z-index: 100;
  filter: drop-shadow(16px 16px 2px black) opacity(50%);
}

.neon rect,
.neon path:last-child {
  display: none;
}
</style>
