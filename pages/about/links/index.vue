<template lang="pug">
.wrapper.bg-teal-900
  .container.text-center
    h1 Links☮

    p Little pieces of me in various online profiles, not a puzzle there is no finished jigsaw.

    .mt-12(:class="$style.links")

      a(href="https://github.com/SubZtep" target="_blank")
        fa(:icon="['fab', 'github']")
        span GitHub

      a(href="https://www.linkedin.com/in/andrasserfozo/" target="_blank")
        fa(:icon="['fab', 'linkedin']")
        span LinkedIn

      a(href="https://connect.unity.com/u/583ad92d32b306002a9e7ab2" target="_blank")
        fa(:icon="['fal', 'cube']")
        span UnityConnect

      a(href="https://twitter.com/subztep" target="_blank")
        fa(:icon="['fab', 'twitter']")
        span Twitter

      a(href="https://www.instagram.com/subztep/" target="_blank")
        fa(:icon="['fab', 'instagram']")
        span Instagram

      a(href="https://www.facebook.com/subztep" target="_blank")
        fa(:icon="['fab', 'facebook-f']")
        span Facebook

      a(href="https://www.twitch.tv/subztep" target="_blank")
        fa(:icon="['fab', 'twitch']")
        span #Twitch

      a(href="https://subztep.itch.io/" target="_blank")
        fa(:icon="['fab', 'itch-io']")
        span #ItchIo

      a(href="https://www.youtube.com/channel/UCy1JFooPXHose1GKoPZVxMg" target="_blank")
        fa(:icon="['fab', 'youtube']")
        span #YouTube

      a(href="https://www.last.fm/user/hybridoma" target="_blank")
        fa(:icon="['fab', 'lastfm']")
        span #LastFm

      a(href="https://soundcloud.com/subztep" target="_blank")
        fa(:icon="['fab', 'soundcloud']")
        span #SoundCloud

      a(href="https://www.mixcloud.com/subztep/" target="_blank")
        fa(:icon="['fab', 'mixcloud']")
        span #MixCloud




</template>

<script lang="ts">
import { Component, mixins } from "nuxt-property-decorator"
import TransitionMixin from "~/mixins/transition"

@Component({
  head: {
    title: "Links"
  }
})
export default class AboutLinksPage extends mixins(TransitionMixin) {}
</script>

<style lang="scss" module>
.links {
  max-width: 900px;
  margin: 2rem auto;

  a {
    text-align: center;
    display: inline-block;
    width: 300px;
    margin: 0.5rem 0;
    svg {
      z-index: 90;
      color: yellow;
      font-size: 3rem;
      position: relative;
      top: 4px;
      left: 18px;
      opacity: 0.5;
    }

    span {
      position: relative;
      z-index: 100;
      font-size: 2rem;
      font-weight: bold;
      -webkit-text-stroke: 1px #333;
      //text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    }

    > * {
      transition: 0.2s;
    }

    &:hover,
    &:focus {
      svg {
        opacity: 0.6;
        transform: scale3d(3, 1.2, 1);
        color: red;
      }
      span {
        color: lime;
        -webkit-text-stroke: 1px black;
      }
    }
  }
}
</style>
