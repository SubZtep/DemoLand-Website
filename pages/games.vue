<template lang="pug">
.games
  h1
    | Games
    small (and stuff)

  p.more
    !="(<em>Note: Write Descriptions</em> ⚙️ "
    a(
      href="https://wordpress.org/plugins/gif-animation-preview/"
      onclick="gtag('event', 'Temp Page Link Click', {'event_category': 'Games', 'event_action': 'GIF Animation Preview'})"
      target="_blank") GIF Animation Preview
    =" 🎮 "
    a(
      href="https://ldjam.com/events/ludum-dare/40/the-hunger-maims"
      onclick="gtag('event', 'Temp Page Link Click', {'event_category': 'Games', 'event_action': 'The Hunger Maims'})"
      target="_blank")
      | The Hunger Maims
    =" 🎮 "
    a(
      href="https://ldjam.com/events/ludum-dare/41/untitled-title"
      onclick="gtag('event', 'Temp Page Link Click', {'event_category': 'Games', 'event_action': 'Road Pump'})"
      target="_blank")
      | Road Pump
    =" ⚙️ "
    a(
      href="https://github.com/SubZtep/SQLiteManager"
      onclick="gtag('event', 'Temp Page Link Click', {'event_category': 'Games', 'event_action': 'SQLiteManager'})"
      target="_blank")
      | SQLiteManager
    =" ⚙️ "
    a(
      href="https://json.city/"
      onclick="gtag('event', 'Temp Page Link Click', {'event_category': 'Games', 'event_action': 'Json City'})"
      target="_blank")
      | Json City
    =" 🎮 "
    a(
      href="http://2018.js13kgames.com/entries/whirled-on-the-spirit-spiral"
      onclick="gtag('event', 'Temp Page Link Click', {'event_category': 'Games', 'event_action': 'Whirled on the Spirit Spiral'})"
      target="_blank")
      | Whirled on the Spirit Spiral
    =" etc…)"

  .row
    .col
      img(src="img/whilefly_icon.png")
      h2 While Fly
      p.date (2016)
      p
        a(
          href="https://demo.land/whilefly/"
          onclick="gtag('event', 'Temp Page Link Click', {'event_category': 'Games', 'event_action': 'While Fly'})"
          target="_blank")
          | Page
        br
        a(
          href="https://subztep.itch.io/whilefly"
          onclick="gtag('event', 'Temp Page Link Click', {'event_category': 'Games', 'event_action': 'While Fly Itch.io'})"
          target="_blank")
          | Itch.io
        br
        a(
          href="https://play.google.com/store/apps/details?id=land.demo.whilefly"
          onclick="gtag('event', 'Temp Page Link Click', {'event_category': 'Games', 'event_action': 'While Fly Google Play'})"
          target="_blank")
          | Google Play
        br
        a(
          href="https://www.amazon.co.uk/Andras-Serfozo-While-Fly/dp/B01M010NWP/"
          onclick="gtag('event', 'Temp Page Link Click', {'event_category': 'Games', 'event_action': 'While Fly Amazon Appstore'})"
          target="_blank")
          | Amazon Appstore
    .col
      img(src="img/helptofindcats_icon.png")
      h2 Help to Find Cats
      p.date (2016)
      p
        a(
          href="https://devpost.com/software/help-to-find-cats"
          onclick="gtag('event', 'Temp Page Link Click', {'event_category': 'Games', 'event_action': 'Help to Find Cats Page'})"
          target="_blank")
          | Page
        br
        a(
          href="https://play.google.com/store/apps/details?id=land.demo.cats"
          onclick="gtag('event', 'Temp Page Link Click', {'event_category': 'Games', 'event_action': 'Help to Find Cats Google Play'})"
          target="_blank")
          | Google Play
        br
        a(href="https://www.amazon.co.uk/Andras-Serfozo-Help-Find-Cats/dp/B01F18KH4Y/" target="_blank" onclick="gtag('event', 'Temp Page Link Click', {'event_category': 'Games', 'event_action': 'Help to Find Cats Amazon Appstore'})") Amazon Appstore
    .col
      img(src="img/basicpong_icon.png")
      h2 Basic Pong
      p.date (2015)
      p
        a(
          href="https://www.amazon.co.uk/Andras-Serfozo-Basic-Pong/dp/B01H2M5EK4/"
          onclick="ga('send', 'event', 'Games', 'Click', 'gtag('event', 'Temp Page Link Click', {'event_category': 'Games', 'event_action': 'Basic Pong Amazon Appstore'})');"
          target="_blank")
          | Amazon Appstore
</template>

<script>
export default {
  created() {
    if (typeof window === "undefined") return

    setTimeout(() => {
      this.$router.push("/about")
    }, this.$store.state.pageDelay)
  }
}
</script>


<style lang="scss">
.games {
  background: #647936;
  background: linear-gradient(0deg, #8dab4c 0%, #647936 100%);
  color: #1d2644;
  text-shadow: -0.5px 0 #f5a82c, 0 0.5px #f5a82c, 0.5px 0 #f5a82c, 0 -0.5px #f5a82c;
  small {
    font-size: 1.3rem;
  }
  a {
    color: #1d2644;
    &:hover {
      color: #1d7744;
    }
  }
  .row {
    display: flex;
    .col {
      text-align: center;
      flex: 1;
      width: 20rem;
      h2 {
        font-size: 2rem;
        margin-bottom: 0;
      }
      .date {
        margin-top: 0.2em;
      }
    }
  }
  .more {
    margin: -1rem 0 3rem;
    font-size: 1rem;
    a {
      margin-right: 12px;
      font-weight: bold;
    }
  }
}
</style>
