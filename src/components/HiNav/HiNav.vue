<!-- nav通用组件 -->
<template>
  <div id="hi-nav">
    <div class="wrap" :class="isNavFiexd ? 'nav-fixed' : ''">
      <div class="nav-wrap">
        <div class="container">
          <!-- 左侧图标 -->
          <div class="left">
            <img src="./EAP.png" alt="" />
          </div>
          <!-- 中间nav列表 -->
          <div class="navs">
            <div
              class="nav"
              :class="navIndex == index ? 'nav-active-bar' : ''"
              v-for="(item, index) in navs"
              :key="index"
              @click="selectNav(index)"
            >
              <router-link :to="item.router">{{ item.name }}</router-link>
            </div>
          </div>
          <!-- 右侧功能按钮 -->
          <div class="right">
            <div class="menu">
              <button>登录</button>
              <button>注册</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- nav悬停后占位 -->
    <div class="placeholder" v-show="isNavFiexd"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavFiexd: true, // 判断导航栏是否悬停顶部
      navIndex: 0,
      navs: [
        // nav列表
        { name: "首页", router: "/home" },
        { name: "产品", router: "/produce" },
        { name: "体验", router: "/experience" },
        { name: "解决方案", router: "/solution" },
        { name: "文档", router: "/document" },
        { name: "社区", router: "/community" }
      ]
    };
  },
  methods: {
    //   nav切换
    selectNav(index) {
      this.navIndex = index;
      document.documentElement.scrollTop
        ? (document.documentElement.scrollTop = 0)
        : document.body.scrollTop
        ? (document.body.scrollTop = 0)
        : "";
    },
    //  监听滚轮 悬停nav
    scrollEvent() {
      let scroll =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      scroll > 100 ? (this.isNavFiexd = true) : (this.isNavFiexd = false);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollEvent);
  }
};
</script>

<style lang="stylus" scoped>
.placeholder
  height 64px
.wrap
  background #333333
  width 100%
  &.nav-fixed
    position fixed
    z-index 999
  .nav-wrap
    margin 0 auto
    .container
        display flex
        justify-content space-between
        align-items center
        /* 左侧logo */
        .left
            flex 0 0 auto
            padding-right 100px
            display flex
            align-items center
            height 100%
            color #ffffff
        /* nav列表 */
        .navs
            flex 0 0 auto
            box-sizing border-box
            display flex
            justify-content space-around
            /* nav项目 */
            .nav
                position relative
                flex 0 0 auto
                padding 20px 0
                &.nav:first-child
                  margin-right 16px
                &.nav:last-child
                  margin-left 16px
                a
                    padding 20px 22px
                    font-size 18px
                    font-family MicrosoftYaHei
                    color #eeeeee
                &.nav:hover > a
                    font-weight 600
                /* 鼠标上移nav下划线 */
                &.nav:hover::after
                    content ''
                    position absolute
                    width 40%
                    left 30%
                    bottom 0
                    border-bottom solid 3px #ffffff
                /* 鼠标点击nav下划线 */
                &.nav-active-bar
                    position relative
                &.nav-active-bar::after
                    position relative
                    content ''
                    position absolute
                    width 40%
                    left 30%
                    bottom 0
                    border-bottom solid 3px #ffffff
        .right
          flex 0 0 auto
          padding 14px 0 14px 160px
          height 100%
          button
            margin 0 8px
            padding 5px 30px
            border-radius 30px
            background #00a0e7
            color #ffffff
            border none
@media screen and (min-width:768px)
  .nav-wrap
        width 768px
@media screen and (min-width:992px)
  .nav-wrap
        width 992px
@media screen and (min-width:1200px)
  .nav-wrap
        width 1200px
</style>
