<template>
  <div id="index">
    <!-- 导航栏 -->
    <hi-nav></hi-nav>
    <!-- 轮播图 -->
    <hi-banner></hi-banner>
    <router-view />
    <!-- 底部声明 -->
    <hi-footer></hi-footer>
  </div>
</template>

<script>
export default {
  components: {
    HiNav: () => import("@/components/HiNav/HiNav"),
    HiBanner: () => import("@/components/HiBanner/HiBanner"),
    HiFooter: () => import("@/components/HiFooter/HiFooter")
  }
};
</script>

<style lang="stylus" scoped></style>
