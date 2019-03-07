<template lang="pug">
div(:class="$style.loading")
  div
    div
      div
</template>

<script>
export default {
  layout: "loading",
  created() {
    if (typeof window === "undefined") return

    const assets = {
      logoGif: "https://media.giphy.com/media/sPuDbEFCsoN32/giphy.gif",
      blogGif: "https://media.giphy.com/media/3wDD0Khwova4o/giphy.gif",
      tempGif: "https://media.giphy.com/media/9EWRVH2H98z6g/giphy.gif",
      avatar: "https://s.gravatar.com/avatar/fa1e8161f961b4abd7cc7f61aa486021?s=120",
      flyIcon: "/images/whilefly_icon.png",
      catsIcon: "/images/helptofindcats_icon.png",
      pongIcon: "/images/basicpong_icon.png",
      ucGif: "/images/under_construction.gif"
    }
    const checkImage = path =>
      new Promise(resolve => {
        let img = new Image()
        img.onload = () => resolve({ path, status: "ok" })
        img.onerror = () => resolve({ path, status: "error" })
        img.src = path
      })
    const loadImgs = (...paths) => Promise.all(paths.map(checkImage))
    loadImgs(...Object.values(assets)).then(() => {
      this.$router.push("/home")
    })
  }
}
</script>

<style lang="scss" module>
@keyframes pulse {
  0% {
    border-color: #000;
  }
  50% {
    border-color: #f5a82c;
  }
  100% {
    border-color: #000;
  }
}

.loading {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #008080;
  background: rgb(2, 0, 36);
  background: radial-gradient(circle, #008080 20%, #000 40%);
  z-index: 1000;
  position: fixed;
  div {
    border: 40px dashed #000;
    border-radius: 50%;
    height: calc(100% - 65px);
    animation: pulse 3s infinite;
    opacity: 0.5;
  }
}
</style>
