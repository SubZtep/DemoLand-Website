<template lang="pug">
.body
  AppNavigation
  .overflow-hidden
    nuxt
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import AppNavigation from "~/components/AppNavigation.vue"

@Component({
  components: {
    AppNavigation
  }
})
export default class DefaultLayout extends Vue {}
</script>
