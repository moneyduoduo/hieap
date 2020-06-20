<!-- 社区 -->
<template>
  <div id="community">
    <div class="container">
      <!-- 顶部title -->
      <div class="title">
        <span class="text">社区中心</span>
        <img src="../assets/img/produce/bottom-bar.png" alt="" />
      </div>
      <!-- nav列表 -->
      <div class="tab-nav">
        <div class="item" v-for="(item, index) in navs" :key="index">
          <span class="text">{{ item }}</span>
        </div>
      </div>
      <!-- 文章列表 -->
      <div class="list">
        <!-- 左边文章列表 -->
        <div class="left">
          <div class="item" v-for="(item, index) in datas" :key="index">
            <div class="top">
              <span class="no">{{ item.no }}</span>
              <span class="text">{{ item.title }}</span>
            </div>
            <div class="subtitle">
              <span class="date">{{ item.date }}</span>
              <span class="type">{{ item.type }}</span>
            </div>
            <div class="other">
              <span class="text">回答:{{ item.answer }}</span>
              <span class="text">浏览:{{ item.visits }}</span>
            </div>
          </div>
        </div>
        <!-- 右边文章列表 -->
        <div class="right">
          <div class="item" v-for="(item, index) in datas2" :key="index">
            <div class="top">
              <span class="no">{{ item.no }}</span>
              <span class="text">{{ item.title }}</span>
            </div>
            <div class="subtitle">
              <span class="date">{{ item.date }}</span>
              <span class="type">{{ item.type }}</span>
            </div>
            <div class="other">
              <span class="text">回答:{{ item.answer }}</span>
              <span class="text">浏览:{{ item.visits }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 查看更多按钮 -->
      <div class="more">
        <button>查看更多</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        "可视化配置",
        "移动应用",
        "常见问题",
        "部署实施",
        "中间层",
        "建议"
      ], // 导航栏列表
      datas: [
        {
          no: "23737",
          title: "怎么部署一个项目",
          date: "2020年10月29日",
          type: "部署实施",
          answer: 1,
          visits: 33
        },
        {
          no: "23737",
          title: "怎么下载部署文件",
          date: "2020年10月29日",
          type: "部署实施",
          answer: 1,
          visits: 33
        },
        {
          no: "23737",
          title: "创建数据表步骤",
          date: "2020年10月29日",
          type: "部署实施",
          answer: 1,
          visits: 33
        },
        {
          no: "23737",
          title: "关联实体可以当主表吗",
          date: "2020年10月29日",
          type: "部署实施",
          answer: 1,
          visits: 33
        }
      ],
      datas2: [
        {
          no: "23737",
          title: "EAP平台能配置移动商城类的应用吗",
          date: "2020年10月29日",
          type: "可视化配置",
          answer: 1,
          visits: 33
        },
        {
          no: "23737",
          title: "手机APP配置中,能直接调用ECHARTS图表吗",
          date: "2020年10月29日",
          type: "可视化配置",
          answer: 1,
          visits: 33
        },
        {
          no: "23737",
          title: "海创云注册账号/创建团队",
          date: "2020年10月29日",
          type: "可视化配置",
          answer: 1,
          visits: 33
        },
        {
          no: "23737",
          title: "配置手机APP能调用吗",
          date: "2020年10月29日",
          type: "可视化配置",
          answer: 1,
          visits: 33
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
    // 顶部主标题
    .title
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
    // tab导航栏
    .tab-nav
        display flex
        justify-content center
        padding-bottom 20px
        .item
            padding 10px 0
            cursor pointer
            .text
                padding 0 20px
                font-size 16px
                color #888888
                border-right solid 1px #888888
            &.item:last-child .text
                border-right none
    // 显示列表
    .list
        padding-bottom 50px
        display flex
        justify-content space-between
        text-align left
        // 左边显示列表
        .left
            flex 1
            margin-right 50px
        // 右侧显示列表
        .right
            flex 2
        .left, .right
            box-shadow 0 0 6px -4px #00a0e9
            padding 60px
            color #333333
            .top
                padding-bottom 10px
                .no
                    padding-right 12px
                    font-size 18px
                .text
                    font-size 24px
            .subtitle
                padding-bottom 10px
                color #c1c1c1
                .date
                    padding-right 100px
                    font-size 12px
                    font-weight 300
                .type
                    font-size 14px
            .other
                padding-bottom 55px
                font-size 14px
                color #c1c1c1
                .text
                    padding 0 20px
                    &.text:first-child
                        border-right solid 1px #EEEEEE
                        padding-left 0
            .item:last-child .other
              padding-bottom 0
    .more
        padding-bottom 400px
        button
            padding 10px 40px
            border none
            border-radius 40px
            background  #1296db
            color #ffffff
            font-size 24px
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
