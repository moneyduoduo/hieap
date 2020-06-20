<!-- 产品页面 -->
<template>
  <div id="produce">
    <div class="container">
      <!-- 产品介绍 -->
      <div class="produce-item desc-wrap">
        <div class="produce-tab">
          <!-- tab标题 -->
          <span class="title">产品介绍</span>
          <div class="bar">
            <img src="../assets/img/produce/tittle-bottom-bar.png" alt="" />
          </div>
        </div>
        <!-- 产品介绍 -->
        <div class="desc">
          <p class="text">
            海创EAP云平台是一款在线可视化PAAS开发平台，提供企业统一应用平台解决方案，帮助客户建设自主的软件基础平台，提升企业IT架构的统一性、灵活性和可主控扩展能力。
          </p>
          <div class="desc-exmple">
            <div class="item">
              <img src="../assets/img/produce/01-1.png" alt="" />
              <p class="title">开源</p>
              <p class="content">EAP聚焦PAAS、支持SAAS，适配多种IAAS.</p>
            </div>
            <div class="item">
              <img src="../assets/img/produce/01-2.png" alt="" />
              <p class="title">开放</p>
              <p class="content">
                支持企业构建高并发、高性能、高可用、安全的互联网应用或服务.
              </p>
            </div>
            <div class="item">
              <img src="../assets/img/produce/01-3.png" alt="" />
              <p class="title">生态</p>
              <p class="content">
                快速适应商业环境变化，增强企业在互联网时代的竞争力.
              </p>
            </div>
          </div>
        </div>
        <!-- 图标 -->
      </div>
      <!-- 适用范围 -->
      <div class="produce-item scope-wrap">
        <div class="produce-tab">
          <!-- tab标题 -->
          <span class="title">适用范围</span>
          <div class="bar">
            <img src="../assets/img/produce/tittle-bottom-bar.png" alt="" />
          </div>
        </div>
        <!-- 四宫格 -->
        <div class="scope">
          <div class="item">
            <div class="text">
              <p class="title">定位</p>
              <p class="content">
                开发面向企业和财务的信息化系统和管理软件系统
              </p>
            </div>
            <div class="img">
              <img src="../assets/img/produce/02-1-bg.png" alt="" />
              <img
                class="show-pic first-pic"
                src="../assets/img/produce/02-1.png"
                alt=""
              />
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="../assets/img/produce/02-2-bg.png" alt="" />
              <img
                class="show-pic"
                src="../assets/img/produce/02-2.png"
                alt=""
              />
            </div>
            <div class="text">
              <p class="title">适用</p>
              <p class="content">
                企业复杂的多岗位，多角色协同管理各类信息协同软件，电子财务及各行业管理软件，MES生产制造软件，工业信息看板，大数据集成接口。
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 主要能力 -->
      <div class="produce-item ability-wrap">
        <div class="produce-tab">
          <!-- tab标题 -->
          <span class="title">主要能力</span>
          <div class="bar">
            <img src="../assets/img/produce/tittle-bottom-bar.png" alt="" />
          </div>
        </div>
        <div class="ability">
          <div class="item" v-for="(item, index) in abilitys" :key="index">
            <span class="title">{{ index + 1 + "." + item.title }}</span>
            <p class="content">{{ item.content }}</p>
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
      abilitys: [
        {
          title: "快速开发",
          content: "项目模板，在线创建项目，模块拉取，智能复制"
        },
        {
          title: "主数据管理",
          content:
            "亿级数据量接入，统一接入，数据清洗，数据分析，多数据库支持，标准输出接口"
        },
        {
          title: "交互表单",
          content:
            "标准查询，高级查询，树形查找，方案查询，全文检索，标准制单，属性制单，数据暂存，交互组件库综合报表，类EXCEL报表设计器，表单 报表，段落明细报表，分组统计报表，多表头汇总，聚合报表，文件合同报表"
        },
        {
          title: "联动分析报表",
          content:
            "深度分析报表，大屏看板统计图标，报表打印，报表导出WORD、EXCEL、PDF"
        },
        {
          title: "企业流程",
          content:
            "强大的工作流引擎，支持并行、排他、选择、分支、多选、合并、循环、终止、子流程、动态流程、用户自定义流程"
        },
        {
          title: "移动应用",
          content:
            "企业APP、安卓APP、苹果APP、微信服务号、微信企业号、微信小程序等多终端应用。NFC/RFID/人脸/二维码/条码识别/GPS移动通讯/沟通交流及时方便移动审批，移动报表"
        },
        {
          title: "消息通知",
          content: "系统消息通知、短信通知、微信通知、邮件通知"
        },
        {
          title: "组织与权限",
          content:
            "支持多机构、多岗、矩阵型组织、部门、岗位、编制号、人员、代理，支持各类复杂的权限管理，包括功能权限、操作权限、数据库权限等多种权限模式，分级授权，为所有业务模块提供统一的后端服务和全局权限控制，并于工作流、业务规则、业务员数据访问控制无缝集成"
        },
        {
          title: "部署升级",
          content:
            "DOCKER容器打包，一键自动化部署，在线发布升级，离线导入导出增量升级"
        },
        {
          title: "其他",
          content:
            "OFFICE软件接口WORD、EXCEL、PDF操作，人工智能二维码自动识别，函数库等"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.produce-item
    min-width 768px
    margin 0 auto
    /* 通用tab标题 */
    .produce-tab
        text-align left
        .title
            padding-bottom 14px
            font-family MicrosoftYaHei
            font-size 36px
            color #333333

    /* 产品介绍 */
    .desc
        .text
            padding 35px 0
            line-height 35px
            text-align left
            font-family MicrosoftYaHeiLight
            font-size 20px
            color #333333
        .desc-exmple
            display flex
            justify-content center
            .item
                flex 1
                padding 100px 20px
                .title
                    padding 10px 0
                    font-family MicrosoftYaHeiLight
                    font-size 24px
                    color #333333
                .content
                    line-height 24px
                    font-family MicrosoftYaHeiLight
                    font-size 14px
                    color #666666
    /* 适用范围 */
    .scope
        padding-top 50px
        .item
            display flex
            .text
                flex 1
                display flex
                flex-direction column
                justify-content center
                text-align left
                &.text:first-child
                    box-shadow -3px -3px 10px -6px #00a0e9
                &.text:last-child
                    box-shadow 3px 3px 10px -6px #00a0e9
                .title
                    padding 0 40px
                    padding-bottom 30px
                    font-size 30px
                    color #333333
                .content
                    padding 0 40px
                    line-height 34px
                    font-size 24px
                    color #888888
            .img
                position relative
                flex 1
                font-size 0
                img 
                  width 100%
                .show-pic
                    position absolute
                    left 50%
                    top  50%
                    width 80%
                    transform translate(-50%, -50%)
                    &.first-pic
                        top  60%
                        left 55%
                    img 
                        width 100%
    /* 主要能力 */
    .ability
        padding-top 24px
        .item
            text-align left
            .title
                display block
                padding 10px 0
                font-size 24px
                color #333333
            .content
                line-height 28px
                font-size 18px
                color #999999
.desc-wrap
    padding-top 130px
.scope-wrap
    padding-bottom 130px
.ability-wrap
    background-image url('../assets/img/produce/03-bg.png')
    padding-bottom 130px
@media screen and (min-width:768px)
  .produce-item
      width 768px

@media screen and (min-width:992px)
  .produce-item
      width 992px
  
@media screen and (min-width:1200px)
  .produce-item
      width 1200px
</style>
