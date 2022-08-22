<template>
  <footer>
    <Logo />
    <a
      href="https://www.youtube.com/"
      target="_blank">
      (c){{ new Date().getFullYear() }} Heechan
    </a>
  </footer>
</template>

<script>
import Logo from '~/components/Logo'
export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

footer {
  padding: 70px 0;
  text-align: center;
  color: $black;
  opacity: .3;
  .logo {
    display: block;
    margin-bottom: 4px;
  }
}

</style>