<template>
  <transition name="slide">
  <div class="singer-detail">sdf</div>
  </transition>
</template>

<script type="text/ecmascript-6">
/* eslint-disable */

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'

.singer-detail
  z-index: 100
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  background: $color-background

.slide-enter-active,.slide-leave-active
  transition: all 0.3s
.slide-enter,.slide-leave-to
  transform: translate3d(100%,0,0)
</style>