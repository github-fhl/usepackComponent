<template>
  <div class="gaia-header">
    <div class="hello-user">
      <p>{{datetime}} 星期{{week}} {{nongli}} </p>
    </div>
    <div class="out-login">
      <slot></slot>
      <span>
        <i class="iconfont icon-dianyuan1"></i>
      </span>
    </div>
  </div>
</template>

<script>
import {sloarToLunar} from './date'

export default {
  name: 'date',
  mounted () {
    this.newtime()
    this.weeks()
    this.hdnongli()
  },
  data () {
    return {
      datetime: '2018年11月25日',
      week: '星期几',
      nongli: '戊戌年'
    }
  },
  methods: {
    newtime () {
      console.log(1)
      // let date = new Date(DateTool.formatTimeToStr(new Date(), "yyyy-MM-dd"));
      // date = new Date(date.getTime(date) - 8 * 60 * 60000);
      // yyyy年MM月dd日

      // eslint-disable-next-line no-extend-native
      Date.prototype.format = function (fmt) {
        var o = {
          'M+': this.getMonth() + 1, // 月份
          'd+': this.getDate(), // 日
          'h+': this.getHours(), // 小时
          'm+': this.getMinutes(), // 分
          's+': this.getSeconds(), // 秒
          'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
          'S': this.getMilliseconds() // 毫秒
        }
        if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
        }
        for (var k in o) {
          if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
          }
        }
        return fmt
      }
      let date = new Date().format('yyyy-MM-dd hh:mm:ss')
      debugger
      this.datetime = date
    },
    weeks () {
      let weekAarry = ['日', '一', '二', '三', '四', '五', '六']
      let week = weekAarry[new Date().getDay()]
      this.week = week
    },
    hdnongli () {
      let D = new Date()
      let yy = D.getFullYear()
      let mm = D.getMonth() + 1
      let dd = D.getDate() - 12
      console.log(yy, mm, dd)
      let a = sloarToLunar(yy, mm, dd)
      console.log(a)
    },
    getNl () {}
  }
}
</script>

<style scoped lang="scss">
.gaia-header {
  width: 100%;
  height: 48px;
  background-color: #192233;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-size: 12px;
  .hello-user {
    text-align: center;
    width: 40%;
    line-height: 24px;
  }
  .out-login {
    float: right;
    font-size: 14px;
    span {
      margin-right: 20px;
      cursor: pointer;
      i {
        color: #56b8e9;
        margin-right: 6px;
        vertical-align: middle;
      }
      u {
        text-decoration: none;
      }
    }
    .icon-dianyuan1 {
      color: #f56262;
    }
  }
}
</style>
