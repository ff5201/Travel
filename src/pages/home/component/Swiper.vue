<template>
  <!--加wapper防抖动-->
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<!-- >>>样式穿透 wrapper下的swiper-pagination-bullet-active样式进行穿透，才能改变引用子组件的样式-->
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background red !important
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 30.99%
    background #ee
    .swiper-img
      width 100%
</style>
