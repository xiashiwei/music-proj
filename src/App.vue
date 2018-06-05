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

<style scoped lang="stylus">
@import 'common/stylus/variable'

body,html
  margin:0
  padding:0
#app
  color:$color-theme
  background-color:#222
</style>
