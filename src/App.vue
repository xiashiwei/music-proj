<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
  </div>

</template>
/*eslint-disable*/
<script>
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'

export default {
  name: 'App',
  components: {
    MHeader, Tab
  }
}

</script>

<style lang="stylus">
@import 'common/stylus/index'
</style>
