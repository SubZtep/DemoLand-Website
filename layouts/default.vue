<template lang="pug">
div
  #logo.fly(
    onmouseover="showGif('logoGif')"
    onmouseout="hideGif('logoGif')")
    | Demo Land
  img#logoGif

  #blog.fly(
    onmouseover="showGif('blogGif')"
    onmouseout="hideGif('blogGif')")
    a(href="/blog") Blog
  img#blogGif

  #twitter.fly
    a.twitter-follow-button(
      href="https://twitter.com/SubZtep?ref_src=twsrc%5Etfw"
      data-show-count="false"
      data-size="large")
      | Follow @SubZtep</a>
    script(
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8")

  #temp.fly(
    onmouseover="showGif('tempGif')"
    onmouseout="hideGif('tempGif')")
    | ⚠Temporary page (with bugs) ¦̵̱ ̵̱ ̵̱ ̵̱ ̵̱(̢ ̡͇̅└͇̅┘͇̅ (▤8כ−◦
  img#tempGif

  .panel
    nuxt
</template>

<script>
export default {}
</script>


<style lang="scss">
.fly {
  text-shadow: -1px 0 3px #000, 0 1px 3px #000, 1px 0 3px #000, 0 -1px 3px #000;
  position: fixed;
  font-size: 1.5rem;
  color: #f5a82c;
  z-index: 10;
  padding: 0.1rem;
  a {
    color: #f5a82c;
    &:hover {
      color: #cd3313;
    }
  }
  &#logo {
    font-weight: bold;
    top: 1rem;
    left: 1rem;
  }
  &#blog {
    top: 1rem;
    right: 1rem;
  }
  &#twitter {
    bottom: 1rem;
    right: 1rem;
  }
  &#temp {
    bottom: 1rem;
    left: 1rem;
    font-size: 1.1rem;
  }
}

#logoGif {
  position: fixed;
  top: 3rem;
  left: 7rem;
  display: none;
  z-index: 10;
}

#blogGif {
  position: fixed;
  top: 3rem;
  right: 7rem;
  display: none;
  z-index: 10;
}

#tempGif {
  position: fixed;
  bottom: 2.5rem;
  left: 7rem;
  display: none;
  z-index: 10;
}
</style>
