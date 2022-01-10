<template>
  <div>
    <el-button-group>
      <el-button :plain="true" :round="true" class="iconfont" type="primary"
      >查看dev踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩从</el-button
      >
    </el-button-group>
    <!-- <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
      <el-radio-button label="top">top</el-radio-button>
      <el-radio-button label="right">right</el-radio-button>
      <el-radio-button label="bottom">bottom</el-radio-button>
      <el-radio-button label="left">left</el-radio-button>
    </el-radio-group> -->
    <div class="tabsBox">
      <!-- type="card" -->
      <el-tabs addable
        v-model="activeName"
        :tab-position="tabPosition"
        @tab-click="handleClick"
      >
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane closable  label="定时任务补偿" name="fourth"
          >定时任务补偿</el-tab-pane
        >
        <el-tab-pane label="定时任务补偿" name="five">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: 'zj',
  data () {
    return {
      type: 'card',
      tabPosition: 'top',
      activeName: 'second'
    }
  },
  created () {
    // var log4js = require('log4js')
    // var logger = log4js.getLogger()
    // logger.level = 'debug'
    // logger.debug('Some debug messages')
  },
  methods: {
    open () {
      window.open('https://www.baidu.com')
    },
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang="scss" scoped>
.cs {
  color: #000;
  @at-root {
    &.is-cs {
      border-radius: 20px;
      padding: 12px 23px;
    }
  }
}
.l-button {
  &:active {
    color: red;
  }
  &:focus {
    color: blue;
  }
}
.tabsBox {
 width: 500px;
}
</style>
