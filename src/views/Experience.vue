<!-- 体验页面 -->
<template>
  <div id="experience">
    <!-- 顶部nav列表 -->
    <div class="tab-nav-wrap">
      <div class="tab-nav">
        <div class="item" v-for="(item, index) in navs" :key="index">
          <span class="text">{{ item }}</span>
        </div>
      </div>
    </div>
    <div class="container">
      <!-- 01卡片 -->
      <div class="show-card-wrap">
      <div class="show-card">
        <!-- 图片 -->
        <div class="img">
          <div class="bg-img">
            <img src="../assets/img/experience/computer.png" alt="" />
            <div class="show-img">
              <img src="../assets/img/experience/01.png" alt="" />
            </div>
          </div>
        </div>
        <!-- 描述信息 -->
        <div class="desc">
          <!-- 顶部数字以及标题 -->
          <div class="title">
            <img src="../assets/img/home/01.png" alt="" />
            <span class="text">快速开发模式</span>
          </div>
          <!-- 中间文字信息 -->
          <div class="content">
            <p class="text">
              开发者入门门槛低，不需要安装复杂的本地开发环境，只需要一个浏览器就能开发，随时随地开发，快速响应需求变更。成熟的应用框架、强大的业务模型、丰富业务模板、完全可视化拖拽开发、
              开发的组件体系。积木式开发方式，一切皆可视独创的全可视化设计，应用的基本架构、后端服务、前端页面、组件体系等，实现前所未有的低代码开发效率。
            </p>
          </div>
          <div class="more">
            <span>了解更多 ></span>
          </div>
        </div>
      </div>
      </div>
      <!-- 02卡片 -->
      <div class="show-card-wrap">
      <div class="show-card">
        <!-- 描述信息 -->
        <div class="desc">
          <!-- 顶部数字以及标题 -->
          <div class="title">
            <img src="../assets/img/home/02.png" alt="" />
            <span class="text">统一用户中心</span>
          </div>
          <!-- 中间文字信息 -->
          <div class="content">
            <p class="text">
              开发者入门门槛低，不需要安装复杂的本地开发环境，只需要一个浏览器就能开发，随时随地开发，快速响应需求变更。成熟的应用框架、强大的业务模型、丰富业务模板、完全可视化拖拽开发、
              开发的组件体系。积木式开发方式，一切皆可视独创的全可视化设计，应用的基本架构、后端服务、前端页面、组件体系等，实现前所未有的低代码开发效率。
            </p>
          </div>
          <div class="more">
            <span>了解更多 ></span>
          </div>
        </div>
        <!-- 图片 -->
        <div class="img">
          <div class="bg-img">
            <img src="../assets/img/experience/computer.png" alt="" />
            <div class="show-img">
              <img src="../assets/img/experience/02.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      </div>
      <!-- 03卡片 -->
      <div class="show-card-wrap">
      <div class="show-card">
        <!-- 图片 -->
        <div class="img">
          <div class="bg-img">
            <img src="../assets/img/experience/computer.png" alt="" />
            <div class="show-img">
              <img src="../assets/img/experience/03.png" alt="" />
            </div>
          </div>
        </div>
        <!-- 描述信息 -->
        <div class="desc">
          <!-- 顶部数字以及标题 -->
          <div class="title">
            <img src="../assets/img/home/03.png" alt="" />
            <span class="text">主数据管理</span>
          </div>
          <!-- 中间文字信息 -->
          <div class="content">
            <p class="text">
              开发者入门门槛低，不需要安装复杂的本地开发环境，只需要一个浏览器就能开发，随时随地开发，快速响应需求变更。成熟的应用框架、强大的业务模型、丰富业务模板、完全可视化拖拽开发、
              开发的组件体系。积木式开发方式，一切皆可视独创的全可视化设计，应用的基本架构、后端服务、前端页面、组件体系等，实现前所未有的低代码开发效率。
            </p>
          </div>
          <div class="more">
            <span>了解更多 ></span>
          </div>
        </div>
      </div>
      </div>
      <!-- 04卡片 -->
      <div class="show-card-wrap">
      <div class="show-card">
        <!-- 描述信息 -->
        <div class="desc">
          <!-- 顶部数字以及标题 -->
          <div class="title">
            <img src="../assets/img/home/04.png" alt="" />
            <span class="text">交互表单</span>
          </div>
          <!-- 中间文字信息 -->
          <div class="content">
            <p class="text">
              开发者入门门槛低，不需要安装复杂的本地开发环境，只需要一个浏览器就能开发，随时随地开发，快速响应需求变更。成熟的应用框架、强大的业务模型、丰富业务模板、完全可视化拖拽开发、
              开发的组件体系。积木式开发方式，一切皆可视独创的全可视化设计，应用的基本架构、后端服务、前端页面、组件体系等，实现前所未有的低代码开发效率。
            </p>
          </div>
          <div class="more">
            <span>了解更多 ></span>
          </div>
        </div>
        <!-- 图片 -->
        <div class="img">
          <div class="bg-img">
            <img src="../assets/img/experience/computer.png" alt="" />
            <div class="show-img">
              <img src="../assets/img/experience/04.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      </div>
      <!-- 05卡片 -->
      <div class="show-card-wrap">
      <div class="show-card">
        <!-- 图片 -->
        <div class="img">
          <div class="bg-img">
            <img src="../assets/img/experience/computer.png" alt="" />
            <div class="show-img">
              <img src="../assets/img/experience/05.png" alt="" />
            </div>
          </div>
        </div>
        <!-- 描述信息 -->
        <div class="desc">
          <!-- 顶部数字以及标题 -->
          <div class="title">
            <img src="../assets/img/home/05.png" alt="" />
            <span class="text">综合报表</span>
          </div>
          <!-- 中间文字信息 -->
          <div class="content">
            <p class="text">
              开发者入门门槛低，不需要安装复杂的本地开发环境，只需要一个浏览器就能开发，随时随地开发，快速响应需求变更。成熟的应用框架、强大的业务模型、丰富业务模板、完全可视化拖拽开发、
              开发的组件体系。积木式开发方式，一切皆可视独创的全可视化设计，应用的基本架构、后端服务、前端页面、组件体系等，实现前所未有的低代码开发效率。
            </p>
          </div>
          <div class="more">
            <span>了解更多 ></span>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        "快速开发模式",
        "统一用户中心",
        "主数据管理",
        "交互表单",
        "综合报表",
        "企业流程",
        "移动应用",
        "消息通知",
        "组织与权限",
        "部署升级"
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.tab-nav-wrap
    box-shadow 0 6px 6px 0 #f3f2fb
    margin-bottom 6px
    .tab-nav
        margin 0 auto
        width 1200px
        display flex
        justify-content space-between
        .item
            padding 10px 0
            cursor pointer
            .text
                font-size 16px
                color #333333
                padding 0 20px
                border-right solid 1px #333333
            &.item:last-child .text
                border-right none
.container
    .show-card-wrap
        &.show-card-wrap:nth-child(odd)
            background #ffffff
        &.show-card-wrap:nth-child(even)
            background #f5f5ff
        .show-card
            margin 0 auto
            width 1200px
            padding 180px 0
            display flex
            
            .img
                padding 20px
                flex 1
                box-sizing border-box
                .bg-img
                    position relative
                    img
                        width 100%
                    .show-img
                        background red
                        position absolute
                        left 13%
                        top 6%
                        width 75%
                        height 82%
                        overflow hidden
                        img
                            height 120%
            .desc
                flex 1
                text-align left
                .title
                    display inline-block
                    padding-bottom 20px
                    text-align center
                    .text
                        display block
                        position relative
                        bottom 20px
                        font-size 36px
                .content
                    padding-top 50px
                    .text
                        line-height: 28px;
                        font-size: 18px;
                        color: #888;
                .more
                    padding-top 20px
                    color #4130bc
@media screen and (min-width:768px)
  .tab-nav
      width 768px

@media screen and (min-width:992px)
  .tab-nav
      width 992px
  
@media screen and (min-width:1200px)
  .tab-nav
      width 1200px
</style>
