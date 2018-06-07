<template>
  <transition name="slide">
  <div class="singer-detail">sdf</div>
  </transition>
</template>

<script type="text/ecmascript-6">
/* eslint-disable */
import {mapGetters} from 'vuex'
import {getSingerDetail} from 'api/singer'
import {ERR_OK} from 'api/config'
import {createSong} from 'common/js/song'

export default {
  computed: {
    ...mapGetters([
      'singer'
    ])
  },
  created() {
    this._getDetail()
  },
  methods: {
    _getDetail () {
      getSingerDetail(this.singer.id).then((res) => {
        if(res.code === ERR_OK){
          this.songs=this._normalizeSong(res.data.list)
          console.log(this.songs)
        }
      })
    },
    _normalizeSong(list) {
      let ret =[]
      list.forEach((element) => {
        let {musicData} =element
        if(musicData.songid && musicData.albummid){
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  }
}
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