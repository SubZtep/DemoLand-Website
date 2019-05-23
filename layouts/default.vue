<template lang="pug">
.overflow-hidden
  HudMap
  nuxt
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import HudMap from "~/components/rooter/HudMap.vue"

@Component({ components: { HudMap } })
export default class DefaultLayout extends Vue {}
</script>
