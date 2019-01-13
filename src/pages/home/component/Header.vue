<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩/主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.doubleCity}}
        <span class="iconfont arrow-icon">&#xe62d;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex' // vuex 中state的映射，通过computed属性映射state.city到city
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.header
  display flex
  line-height $headerHeight
  background $bgColor
  color #fff;
  .header-left
    width .64rem
    float left
    .back-icon
      text-align center
      font-size .4rem
      padding-left .2rem
  .header-input
    flex 1
    background #fff
    height .64rem
    line-height .64rem
    padding-left .2rem
    margin-top .12rem
    margin-left .2rem
    margin-right .2rem
    border-radius .1rem
    color #000
  .header-right
    min-width 1.04rem
    padding 0 .1rem
    float right
    text-align center
    margin-right .2rem
    color #ffffff
    .arrow-icon
      margin-left -.04rem
      font-size .24rem
</style>
