<template>
  <div 
    :style="{backgroundImage: `url(${movie.Poster})`}"
    class="movie">
    <div class="info">
      <div class="year">
        {{ movie.Year }}
      </div>
      <div class="title">
        {{ movie.Title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

  .movie {
    $width: 200px;
    width: $width;
    height: $width * 3 / 2;
    margin: 10px;
    border-radius: 4px;
    background-color: $gray-400;
    background-size: cover;
    overflow: hidden;
    position: relative;
    .info {
      background-color: rgba($black, .3);
      padding: 14px;
      width: 100%;
      font-size: 14px;
      position: absolute;
      text-align: center;
      left: 0;
      bottom: 0;
    }
  }
</style>