<!-- 文档中心 -->
<template>
  <div id="document">
    <div class="container">
      <!-- 顶部title -->
      <div class="title">
        <span class="text">文档中心</span>
        <img src="../assets/img/produce/bottom-bar.png" alt="" />
      </div>
      <!-- 九宫格列表 -->
      <div class="show-list">
        <div class="item" v-for="(item, index) in documents" :key="index">
          <img
            class="img"
            :src="require('../assets/img/document/' + (index + 1) + '.png')"
            alt=""
          />
          <p class="text">{{ item }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      documents: [
        "建模工具文档",
        "开发文档",
        "手机开发文档",
        "中间层文档",
        "应用手册",
        "互联网云平台",
        "海创微联",
        "2D组态",
        "IPA建模仿真算法"
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.container
    margin 0 auto
    min-width 768px
    .title
        display flex
        flex-direction column
        justify-content center
        align-items center
        padding 74px 0 60px 0
        .text
            padding-bottom 10px
            display block
            width 100%
            font-size 36px
            color #333333
    .show-list
        padding-bottom 420px
        display grid
        grid-template-columns repeat(3, calc(33.3% - 36.6px))
        grid-gap 55px
        .item
            &.item:hover
              transform scale(1.1,1.1)
            transition all 0.5s
            box-shadow 0 0 6px -3px #00a0e9
            -mz-box-shadow 0 0 16px -3px #00a0e9
            .img
                padding-top 60px
            .text
                padding 35px 0
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
