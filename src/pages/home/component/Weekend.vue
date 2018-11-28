<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.url" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      list: [{
        id: '1',
        url: 'http://img1.qunarzz.com/sight/source/1811/2f/d68f3d5122d362.jpg_r_640x214_31543b2d.jpg',
        title: '北海环岛游观光',
        desc: '这里很火，很多人点评它！'
      }, {
        id: '2',
        url: 'http://img1.qunarzz.com/sight/source/1811/2f/d68f3d5122d362.jpg_r_640x214_31543b2d.jpg',
        title: '北海环岛游观光',
        desc: '这里很火，很多人点评它！'
      }, {
        id: '3',
        url: 'http://img1.qunarzz.com/sight/source/1811/2f/d68f3d5122d362.jpg_r_640x214_31543b2d.jpg',
        title: '北海环岛游观光',
        desc: '这里很火，很多人点评它！'
      }, {
        id: '4',
        url: 'http://img1.qunarzz.com/sight/source/1811/2f/d68f3d5122d362.jpg_r_640x214_31543b2d.jpg',
        title: '北海环岛游观光',
        desc: '这里很火，很多人点评它！'
      }, {
        id: '5',
        url: 'http://img1.qunarzz.com/sight/source/1811/2f/d68f3d5122d362.jpg_r_640x214_31543b2d.jpg',
        title: '北海环岛游观光',
        desc: '这里很火，很多人点评它！'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height .8rem
    background #eee
    text-indent .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 37.09%
    .item-img
      width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
</style>
