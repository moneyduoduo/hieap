<!-- 解决方案页面 -->
<template>
  <div id="solution">
    <div class="container">
      <!-- 顶部标题信息 -->
      <div class="top">
        <span class="text">解决方案</span>
        <img src="../assets/img/produce/bottom-bar.png" alt="" />
        <span class="subtitle"
          >多个工业互联网创新案例，致力于打造智慧工业生态链系统</span
        >
      </div>
      <!-- 展示卡片列表 -->
      <div class="solution-wrap">
        <div class="item" v-for="(item, index) in solutions" :key="index">
          <div class="img">
            <img :src="item.pic" alt="" />
          </div>
          <div class="title">{{ item.title }}</div>
          <div class="content">{{ item.content }}</div>
          <button class="more">了解更多</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      solutions: [
        {
          pic: require("@/assets/img/solution/1.png"),
          title: "智慧矿山",
          content:
            "中海创携手紫金矿业集团打造”智慧矿山“。依托资金矿业强大行业制造能力和中海创核心的软件平台，强强联合打破内部信息孤岛，系统地为提升矿山产业4.0提供服务，实现共赢。"
        },
        {
          pic: require("@/assets/img/solution/2.png"),
          title: "智慧农业",
          content:
            "中海创携手紫金矿业集团打造”智慧矿山“。依托资金矿业强大行业制造能力和中海创核心的软件平台，强强联合打破内部信息孤岛，系统地为提升矿山产业4.0提供服务，实现共赢。"
        },
        {
          pic: require("@/assets/img/solution/3.png"),
          title: "智慧能源",
          content:
            "中海创携手紫金矿业集团打造”智慧矿山“。依托资金矿业强大行业制造能力和中海创核心的软件平台，强强联合打破内部信息孤岛，系统地为提升矿山产业4.0提供服务，实现共赢。"
        },
        {
          pic: require("@/assets/img/solution/4.png"),
          title: "智慧水务",
          content:
            "中海创携手紫金矿业集团打造”智慧矿山“。依托资金矿业强大行业制造能力和中海创核心的软件平台，强强联合打破内部信息孤岛，系统地为提升矿山产业4.0提供服务，实现共赢。"
        },
        {
          pic: require("@/assets/img/solution/5.png"),
          title: "智能制造",
          content:
            "中海创携手紫金矿业集团打造”智慧矿山“。依托资金矿业强大行业制造能力和中海创核心的软件平台，强强联合打破内部信息孤岛，系统地为提升矿山产业4.0提供服务，实现共赢。"
        },
        {
          pic: require("@/assets/img/solution/6.png"),
          title: "智慧纺织",
          content:
            "中海创携手紫金矿业集团打造”智慧矿山“。依托资金矿业强大行业制造能力和中海创核心的软件平台，强强联合打破内部信息孤岛，系统地为提升矿山产业4.0提供服务，实现共赢。"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.container
    margin 0 auto
    min-width 768px
    .top
        display flex
        flex-direction column
        justify-content center
        align-items center
        padding-top 74px
        .text
            padding-bottom 10px
            display block
            width 100%
            font-size 36px
            color #333333
        .subtitle
            padding 18px 0 54px 0
            font-size 18px
            color #999999
    .solution-wrap
        padding-bottom 200px
        display grid
        grid-template-columns repeat(3, 33.3%)
        grid-column-gap 22px
        grid-row-gap 46px
        .item
            position relative
            top 0
            transition all 0.5s
            &.item:hover
              top -10px
              box-shadow 0 2px 12px -3px #00a0e9
              -mz-box-shadow 0 2px 18px -3px #00a0e9
            box-shadow 0 2px 8px -3px #00a0e9
            -mz-box-shadow 0 2px 18px -3px #00a0e9
            .img
                position relative
                width 100%
                height 250px
                overflow hidden
                img
                  position absolute
                  left 0
                  bottom 0
                  width 100%
        .title
            padding 20px 0
            font-size 20px
            color #333333
        .content
            padding 0 20px
            line-height 24px
            font-size 14px
            color #888888
            text-align left
        .more
            margin 30px
            padding 10px 20px
            border none
            border-radius 5px
            font-size 14px
            color #999999
            background #eeeeee
            cursor pointer
@media screen and (min-width:768px)
  .container
      width 768px

@media screen and (min-width:992px)
  .container
      width 992px
  
@media screen and (min-width:1200px)
  .container
      width 1200px
</style>
