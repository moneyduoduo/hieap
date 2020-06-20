<template>
  <div class="home">
    <div class="container">
      <!-- 01卡片 -->
      <div class="card-wrap">
        <div class="card">
          <!-- 顶部数字图标 -->
          <div class="title-pic-num">
            <img src="../assets/img/home/01.png" alt="" />
            <p>积木式开发&nbsp;&nbsp;从未如此简单</p>
          </div>
          <!-- 图片展示列表 -->
          <div class="img-list">
            <div class="item">
              <img src="../assets/img/home/01-2.5dCH1.png" alt="" />
            </div>
            <div class="item">
              <img src="../assets/img/home/01-2.5dCH2.png" alt="" />
            </div>
            <div class="item">
              <img src="../assets/img/home/01-2.5dCH3.png" alt="" />
            </div>
          </div>
          <!-- 文字说明 -->
          <div class="text">
            <p>
              平台集应用的开发、配置、运行、集成于一体，<br />
              为各种持续变化、不断创新演进的企业级应用系统提供支持。
            </p>
          </div>
          <!-- 更多按钮 -->
          <div class="more">
            <button>MORE</button>
          </div>
        </div>
      </div>
      <!-- 02卡片 -->
      <div class="card-wrap">
        <div class="card">
          <!-- 顶部数字图标 -->
          <div class="title-pic-num">
            <img src="../assets/img/home/02.png" alt="" />
            <p>八大平台优势、&nbsp;&nbsp;颠覆传统</p>
          </div>
          <!-- 选项卡 -->
          <div class="tabs">
            <div
              class="item"
              v-for="(item, index) in tabs"
              :key="index"
              @click="tabIndex = index"
            >
              <p>{{ item }}</p>
              <div
                class="bar"
                :class="tabIndex == index ? 'active-bar' : ''"
              ></div>
            </div>
            <div class="ellipsis">
              <img src="../assets/img/home/ellipsis.png" alt="" />
              <div class="bar"></div>
            </div>
          </div>
        </div>
        <!-- 02卡片 图片展示 -->
        <div class="computer-wrap">
          <div class="computer">
          <!-- 左侧图片 -->
          <div class="left">
            <img src="../assets/img/home/02-computer.png" alt="" />
            <!-- 图片画中画 -->
            <div class="computer-content">
              <img src="../assets/img/home/02-computer-content.png" alt="" />
            </div>
          </div>
          <!-- 右侧文字 -->
          <div class="right">
            <span class="title">快速开发</span>
            <p class="content">
              纯浏览器WEB模式可视化配置开发，辅配JAVASCRIPT<br />高级就宏语言，保存即生效，无需打包编译和发布。
            </p>
          </div>
        </div>
        </div>
      </div>
      <!-- 03卡片 -->
      <div class="card-wrap">
        <div class="card">
          <!-- 顶部数字图标 -->
          <div class="title-pic-num">
            <img src="../assets/img/home/03.png" alt="" />
            <p>八大核心&nbsp;&nbsp;全速奔跑</p>
          </div>
          <!-- 十大核心 网格列表展示 -->
          <div class="core">
            <div class="item" v-for="(item, index) in cores" :key="index">
              <img :src="item.pic" alt="" />
              <p>{{ item.title }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 04卡片 -->
      <div class="card-wrap">
        <div class="card">
          <!-- 顶部数字图标 -->
          <div class="title-pic-num">
            <img src="../assets/img/home/04.png" alt="" />
            <p>技术架构&nbsp;&nbsp;自主掌控</p>
          </div>
          <!-- 技术架构 -->
          <div class="framework">
            <div class="item" v-for="(item, index) in frameworks" :key="index">
              <img :src="item.pic" alt="" />
              <!-- 文字说明 -->
              <div class="desc">
                <p class="title">{{ item.title }}</p>
                <p class="content">{{ item.content }}</p>
              </div>
            </div>
          </div>
          <!-- 更多按钮 -->
          <div class="more">
            <button>MORE</button>
          </div>
        </div>
      </div>
      <!-- 05卡片 -->
      <div class="card-wrap">
        <div class="card">
          <!-- 顶部数字图标 -->
          <div class="title-pic-num">
            <img src="../assets/img/home/05.png" alt="" />
            <p>解决方案&nbsp;&nbsp;全方位一站式</p>
          </div>
          <!-- 解决方案列表 -->
          <div class="solution-list">
            <div class="item" v-for="(item, index) in solutions" :key="index">
              <img :src="item.pic" alt="" />
              <!-- 绝对定位图标 文字 -->
              <div class="icon-wrap">
                <div class="icon">
                  <img :src="item.icon" alt="" />
                  <div class="title">{{ item.title }}</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 更多按钮 -->
          <div class="more">
            <button>MORE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      tabIndex: 0, // 图二选项卡索引
      tabs: [
        "快速开发",
        "模板丰富",
        "多客户端",
        "界面友好",
        "安全性高",
        "综合性强"
      ], // 图二选项卡列表
      cores: [
        { title: "可视化开发", pic: require("@/assets/img/home/03-1.png") },
        { title: "丰富的组件", pic: require("@/assets/img/home/03-2.png") },
        { title: "高效代码编写", pic: require("@/assets/img/home/03-3.png") },
        { title: "可视化流程设计", pic: require("@/assets/img/home/03-4.png") },
        { title: "数据模型管理", pic: require("@/assets/img/home/03-5.png") },
        { title: "智能报表", pic: require("@/assets/img/home/03-6.png") },
        { title: "灵活的权限模型", pic: require("@/assets/img/home/03-7.png") },
        { title: "多样化主题皮肤", pic: require("@/assets/img/home/03-8.png") },
        { title: "便捷的接口开发", pic: require("@/assets/img/home/03-9.png") },
        { title: "大数据云运维", pic: require("@/assets/img/home/03-10.png") }
      ],
      frameworks: [
        // 技术架构信息
        {
          pic: require("@/assets/img/home/04-1.png"),
          title: "PaaS",
          content:
            "平台可以提供远程在线的软件开发调试，发布功能完全符合PaaS的典型特性。"
        },
        {
          pic: require("@/assets/img/home/04-2.png"),
          title: "多租户",
          content:
            "支持多域（多租户模式）管理，对每个租户的软件激活与授权可通过企业城灵活控制全面支持SaaS服务"
        },
        {
          pic: require("@/assets/img/home/04-3.png"),
          title: "微服务架构",
          content: "平台符合SOA标准并在此基础上实现组件可视化"
        },
        {
          pic: require("@/assets/img/home/04-4.png"),
          title: "前后端分离",
          content: "平台前后端可以以解耦发挥各级术专业专攻"
        }
      ],
      solutions: [
        // 解决方案
        {
          pic: require("@/assets/img/home/05-1.png"),
          icon: require("@/assets/img/home/05-icon-1.png"),
          title: "矿业"
        },
        {
          pic: require("@/assets/img/home/05-2.png"),
          icon: require("@/assets/img/home/05-icon-2.png"),
          title: "农业"
        },
        {
          pic: require("@/assets/img/home/05-3.png"),
          icon: require("@/assets/img/home/05-icon-3.png"),
          title: "电力"
        },
        {
          pic: require("@/assets/img/home/05-4.png"),
          icon: require("@/assets/img/home/05-icon-4.png"),
          title: "水务"
        },
        {
          pic: require("@/assets/img/home/05-5.png"),
          icon: require("@/assets/img/home/05-icon-5.png"),
          title: "智能制造"
        },
        {
          pic: require("@/assets/img/home/05-6.png"),
          icon: require("@/assets/img/home/05-icon-6.png"),
          title: "智能物流"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>

  .container
    /* 卡片列表展示 */
    .card-wrap
      &.card-wrap:nth-child(odd)
        background #f7f7f7
      &.card-wrap:nth-child(even)
        background #ffffff
      &.card-wrap:last-child .card
        padding-bottom 200px
      .card
        min-width 768px
        margin 0 auto
      /* 卡片头部数字通用样式 */
      .title-pic-num
        position relative
        padding 100px 0 60px 0
        p
          position absolute
          bottom 30px
          width 100%
          font-family MicrosoftYaHei
          font-size 36px
          color #333333
/* 卡片1 */
      .img-list
        display flex
        justify-content space-between
        align-items center
        padding-bottom 35px
        border-bottom solid 1px #00a0e9
        .item
          flex 0 0 auto
          &.item:last-child
            padding-right 0
          img
            width 100%
      .text
        padding 28px
        font-size 24px
        line-height 44px
        color #333333
      .more
        padding 20px 0
        button
          padding 5px 30px
          border none
          border-radius 5px
          color #ffffff
          background #00a0e9
          font-size 24px
          font-family MicrosoftYaHei
          cursor pointer
/* 卡片2 */
      .tabs
        padding-top 15px
        margin-bottom 20px
        display flex
        justify-content space-between
        align-items center
        border-bottom solid 1px #eeeeee
        .item
          padding 0 40px
          flex 0 0 auto
          &.item:hover
            cursor pointer
            .bar
              background #6860f2
          .bar
            margin 0 auto
            margin-top 20px
            width 40px
            height 8px
            border none
            border-radius 3px
          .active-bar
            background #6860f2
        .ellipsis
          padding 0 20px 18px 20px
          cursor pointer
      /* 卡片2 图片 */
      .computer-wrap
          padding 70px 0
          .computer
            margin 0 auto
            display flex
            // 左侧图片
            .left
              position relative
              flex 0 0 auto
              .computer-content
                position absolute
                left 0
                top 0
                width 100%
                height 100%
                display flex
                align-items center
                justify-content center
                img
                  padding-bottom 30px
            // 右侧文字描述
            .right
              display flex
              flex-direction column
              justify-content center
              align-items center
              flex 0 0 auto
              padding-left 20px
              .title
                padding-bottom 44px
                font-size 34px
              .content
                font-size 18px
                line-height 28px
                letter-spacing 1px
                color #666666


/* 卡片3 */
      .core
        padding 10px 0 40px 0
        display -ms-grid
        display grid
        grid-template-columns repeat(5, 20%)
        grid-row-gap 120px
        .item
          padding-bottom 60px
          position relative
          display flex
          flex-direction column
          align-items center
          justify-content center
          p
            position absolute
            bottom 0
/* 卡片4 */
      .framework
        display flex
        justify-content center
        .item
          padding 0 20px
          flex 1
          .desc
            padding-bottom  74px
            .title
              padding 20px 0
              font-size 30px
              color #333333
            .content
              font-size 20px
              color #888888
              text-align center
              letter-spacing 1px


/* 卡片5 */
      .solution-list
        padding-bottom 80px
        display flex
        .item
          padding-left 2px
          position relative
          &.item:first-child
            padding-left 0
          .icon-wrap
            position absolute
            bottom 60px
            width 100%
            .icon
              .title
                padding 5px 0
                font-weight 600
                color #ffffff
                font-family: MicrosoftYaHei;
@media screen and (min-width:768px)
  .card, .tabs, .computer
      width 768px

@media screen and (min-width:992px)
  .card, .tabs, .computer
      width 992px
  
@media screen and (min-width:1200px)
  .card, .tabs, .computer
      width 1200px
  
</style>
