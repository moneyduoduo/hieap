<!-- 横幅组件 使用vue-awesome-swiper插件 -->
<template>
  <div id="hi-banner">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- 轮播图 -->
      <swiper-slide>
        <img src="./banner1.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="./banner2.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="./banner3.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="./banner4.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="./banner5.jpg" alt="" />
      </swiper-slide>
      <!-- 小圆点 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1, // 轮播显示数量
        direction: "horizontal",
        loop: true, // 是否可循环
        observer: true,
        observeParents: true, // Swiper的父元素变化时，例如window.resize，Swiper更新。
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: {
          delay: 6000,
          disableOnInteraction: true // 用户操作swiper之后，是否禁止autoplay
        },
        on: {
          slideChangeTransitionStart: () => {
            this.$nextTick(() => {
              //   let iswiper = this.$refs.mySwiper.swiper;
              //   console.log(this.$refs.mySwiper.$swiper);
              // console.log(this.$refs.mySwiper)
              // let i = swiper.realIndex;
              // this.realI = i
            });
          }
        }
      },
      imgList: [
        "/img/banner1.jpg",
        "/img/banner2.jpg",
        "/img/banner3.jpg",
        "/img/banner4.jpg",
        "/img/banner5.jpg"
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
#hi-banner >>> .swiper-pagination-bullet{
    margin 10px 17px
    width 12px
    height 12px
    border solid 2px #ffffff
    opacity 1
    background transparent
}
#hi-banner >>> .swiper-pagination-bullet-active{
    background #ffffff
}
#hi-banner >>> .swiper-slide img{
  width 100%
  margin-top -1px
}
</style>
