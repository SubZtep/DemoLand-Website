<template lang="pug">
.home
  .ns
    img(src="https://s.gravatar.com/avatar/fa1e8161f961b4abd7cc7f61aa486021?s=120")
    p
      | Welcome to my homepage! My name is <strong>Andras Serfozo</strong>,
      =" "
      | the nickname is <strong>SubZtep</strong> at places.
      br
      | I’m programming computers, <strong>web stuff</strong>, sometimes
      =" "
      | <strong>games</strong> and <strong>experiences</strong>.
      br
      | Scroll down for some of my projects and profile links.
      br
      | Also please
      =" "
      a(
        href="blog"
        onclick="gtag('event', 'Temp Page Link Click', {'event_category': 'Home', 'event_action': 'Blog'})")
        | find the <strong>blog</strong>
      | . Enjoy.
</template>

<script>
export default {
  created() {
    if (typeof window === "undefined") return

    setTimeout(() => {
      this.$router.replace("/games")
    }, this.$store.state.pageDelay)
  }
}
</script>

<style lang="scss">
.home {
  .ns {
    font-family: "Schoolbell", cursive;
    img {
      border: 1px dotted #111;
      border-radius: 14px;
      padding: 2px;
      margin-bottom: -15px;
      filter: sepia(80%) hue-rotate(80deg);
    }
  }
  background: #1d2644;
  background: linear-gradient(0deg, #334378 0%, #1d2644 100%);
  text-shadow: -2px 0 #000, 0 2px #000, 2px 0 #000, 0 -2px #000;
  color: #f5a82c;
  a {
    color: #f5a82c;
    &:hover {
      color: #cd3313;
    }
  }
}
</style>
