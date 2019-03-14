<template lang="pug">
.about
  div
    p
      | Hello visitor, construction workzone,
      br
      | why don’t you choose a link of mine below?
    img(
      src="/images/under_construction.gif"
      alt="Under Construction")
    p
      a.b(
        href="https://connect.unity.com/u/583ad92d32b306002a9e7ab2"
        target="_blank"
        onclick="gtag('event', 'Temp Page Link Click', {'event_category': 'About', 'event_action': 'Unity Connect'})")
        | #UnityConnect
      a(
        href="https://github.com/SubZtep"
        target="_blank"
        onclick="gtag('event', 'Temp Page Link Click', {'event_category': 'About', 'event_action': 'GitHub'})")
        | #GitHub
      a(
        href="https://www.instagram.com/subztep/"
        target="_blank"
        onclick="gtag('event', 'Temp Page Link Click', {'event_category': 'About', 'event_action': 'Instagram'})")
        | #Instagram
      a(
        href="https://www.linkedin.com/in/andrasserfozo/"
        target="_blank"
        onclick="gtag('event', 'Temp Page Link Click', {'event_category': 'About', 'event_action': 'LinkedIn'})")
        | #LinkedIn
      a(
        href="https://www.facebook.com/subztep"
        target="_blank"
        onclick="gtag('event', 'Temp Page Link Click', {'event_category': 'About', 'event_action': 'Facebook'})")
        | #Facebook
      a.b(
        href="https://twitter.com/subztep"
        target="_blank"
        onclick="gtag('event', 'Temp Page Link Click', {'event_category': 'About', 'event_action': 'Twitter'})")
        | #Twitter
    p.sp
      a(
        href="https://plus.google.com/u/0/+AndrasSerfozo"
        target="_blank"
        onclick="gtag('event', 'Temp Page Link Click', {'event_category': 'About', 'event_action': 'Google Plus'})")
        | #GooglePlus
      a(
        href="https://www.twitch.tv/subztep"
        target="_blank"
        onclick="gtag('event', 'Temp Page Link Click', {'event_category': 'About', 'event_action': 'Twitch'})")
        | #Twitch
      a(
        href="https://subztep.itch.io/"
        target="_blank"
        onclick="gtag('event', 'Temp Page Link Click', {'event_category': 'About', 'event_action': 'Itch.io'})")
        | #ItchIo
      a(
        href="https://www.youtube.com/channel/UCy1JFooPXHose1GKoPZVxMg"
        target="_blank"
        onclick="gtag('event', 'Temp Page Link Click', {'event_category': 'About', 'event_action': 'YouTube'})")
        | #YouTube
      a(
        href="https://www.last.fm/user/hybridoma"
        target="_blank"
        onclick="gtag('event', 'Temp Page Link Click', {'event_category': 'About', 'event_action': 'Last.fm'})")
        | #LastFm
      a(
        href="https://soundcloud.com/subztep"
        target="_blank"
        onclick="gtag('event', 'Temp Page Link Click', {'event_category': 'About', 'event_action': 'SoundCloud'})")
        | #SoundCloud
      a(
        href="https://www.mixcloud.com/subztep/"
        target="_blank"
        onclick="gtag('event', 'Temp Page Link Click', {'event_category': 'About', 'event_action': 'Mixcloud'})")
        | #Mixcloud
</template>

<script>
export default {
  created() {
    if (typeof window === "undefined") return

    setTimeout(() => {
      this.$router.replace("/home")
    }, this.$store.state.pageDelay)
  }
}
</script>


<style lang="scss">
.about {
  background-color: #870c1c;
  background: linear-gradient(0deg, #077111 0%, #870c1c 100%);
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
  color: #f5a82c;
  .sp {
    margin: -1.1rem 0 0;
  }
  a {
    margin: 0 0.3rem;
    color: #f5a82c;
    &:hover {
      color: #647936;
    }
    &.b {
      font-weight: bold;
    }
  }
}
</style>
