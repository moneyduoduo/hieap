<template>
  <div id="footer">
    <div class="wrap">
      <div class="item" v-for="(item, index) in infos" :key="index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infos: [
        "地址:福建省福州市仓山区金山工业集中区浦上工业园冠浦路512(总力)",
        "热线电话:0591-28482683",
        "版权所有02019福建中海创科技有限责任公司Copyright@2019Fujian ZhonghaiChuang TechnologyCo,Ltd.All rights reserved"
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
#footer
    padding-top 50px
    background #333333
    text-align left
    display flex
    justify-content flex-start
    .wrap
          margin 0 auto
        .item
            padding-bottom 35px
            color #fefefe
            font-size 18px
@media screen and (min-width:768px)
  .wrap
      width 768px

@media screen and (min-width:992px)
  .wrap
      width 992px
  
@media screen and (min-width:1200px)
  .wrap
      width 1200px
</style>
