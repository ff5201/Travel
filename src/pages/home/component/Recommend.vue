<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.url"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详细</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '1',
        url: 'http://img1.qunarzz.com/sight/p0/1707/39/39505b9c3ecbe6f4a3.water.jpg_200x200_88eb5cbf.jpg',
        title: '北海环岛游观光',
        desc: '这里很火，很多人点评它！'
      }, {
        id: '2',
        url: 'http://img1.qunarzz.com/sight/p0/1707/39/39505b9c3ecbe6f4a3.water.jpg_200x200_88eb5cbf.jpg',
        title: '北海环岛游观光',
        desc: '这里很火，很多人点评它！'
      }, {
        id: '3',
        url: 'http://img1.qunarzz.com/sight/p0/1707/39/39505b9c3ecbe6f4a3.water.jpg_200x200_88eb5cbf.jpg',
        title: '北海环岛游观光',
        desc: '这里很火，很多人点评它！'
      }, {
        id: '4',
        url: 'http://img1.qunarzz.com/sight/p0/1707/39/39505b9c3ecbe6f4a3.water.jpg_200x200_88eb5cbf.jpg',
        title: '北海环岛游观光',
        desc: '这里很火，很多人点评它！'
      }, {
        id: '5',
        url: 'http://img1.qunarzz.com/sight/p0/1707/39/39505b9c3ecbe6f4a3.water.jpg_200x200_88eb5cbf.jpg',
        title: '北海环岛游观光',
        desc: '这里很火，很多人点评它！'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
 @import "~styles/mixins.styl"
.recommend-title
  margin-top .2rem
  line-height .8rem
  background #eee
  text-indent .2rem
.item
  overflow hidden
  display flex
  height 1.9rem
  .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem
  .item-info
    flex 1
    padding .1rem
    min-width 0
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
    .item-button
      background #ff9300
      line-height .44rem
      margin-top .16rem
      padding 0 .2rem
      border-radius .06rem
      color #fff
</style>
