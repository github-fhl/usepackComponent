<template>
  <div class="el-tabs">
    <div class="el-tabs__header is-top">
      <span class="el-tabs__new-tab">
        <i class="el-icon-plus"></i>
      </span>
      <div class="el-tabs__nav-wrap is-scrollable is-top">
        <div class="el-tabs__nav-scroll">
          <div class="el-tabs__nav is-top">
            <div class="el-tabs__active-bar is-top"></div>
            <div class="el-tabs__item">第一个tab</div>
            <div class="el-tabs__item">第二个tab</div>
            <div class="el-tabs__item">第三个tab</div>
            <div class="el-tabs__item">第四个tab</div>
          </div>
        </div>
      </div>
    </div>
    <div class="box">
      <span style="float:right">测试哈哈哈哈</span>
      <div class="boxWrap">
        <div class="boxNav">
          <div class="box1">box1 <i class="el-icon-close"></i></div>
          <div class="box1">box2</div>
          <div class="box1">box3</div>
          <div class="box1">box4</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
}
.boxNav {
  white-space: nowrap;
}
.boxWrap {
  overflow: hidden;
}
.box1 {
  padding: 0 20px;
  height: 40px;
  box-sizing: border-box;
  line-height: 40px;
  display: inline-block;
  list-style: none;
  font-size: 14px;
  font-weight: 500;
  color: #303133;
  position: relative;
}
.el-tabs .el-tabs__header {
  padding: 0;
  position: relative;
  margin: 0 0 15px;
}
.el-tabs .el-tabs__active-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background-color: #409eff;
  z-index: 1;
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  list-style: none;
}
.el-tabs .el-tabs__new-tab {
  float: right;
  border: 1px solid #d3dce6;
  height: 18px;
  width: 18px;
  line-height: 18px;
  margin: 12px 0 9px 10px;
  border-radius: 3px;
  text-align: center;
  font-size: 12px;
  color: #d3dce6;
  cursor: pointer;
  transition: all 0.15s;
}
.el-tabs .el-tabs__new-tab .el-icon-plus {
  transform: scale(0.8, 0.8);
}
.el-tabs .el-tabs__new-tab:hover {
  color: #409eff;
}
.el-tabs .el-tabs__nav-wrap {
  overflow: hidden;
  margin-bottom: -1px;
  position: relative;
}
.el-tabs .el-tabs__nav-wrap::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #e4e7ed;
  z-index: 1;
}
.el-tabs .el-tabs__nav-wrap.is-scrollable {
  padding: 0 20px;
  box-sizing: border-box;
}
.el-tabs .el-tabs__nav-scroll {
  overflow: hidden;
}
.el-tabs .el-tabs__nav-next,
.el-tabs .el-tabs__nav-prev {
  position: absolute;
  cursor: pointer;
  line-height: 44px;
  font-size: 12px;
  color: #909399;
}
.el-tabs .el-tabs__nav-next {
  right: 0;
}
.el-tabs .el-tabs__nav-prev {
  left: 0;
}
.el-tabs .el-tabs__nav {
  white-space: nowrap;
  position: relative;
  transition: transform 0.3s;
  float: left;
  z-index: 2;
}
.el-tabs .el-tabs__nav.is-stretch {
  min-width: 100%;
  display: flex;
}
.el-tabs .el-tabs__nav.is-stretch > * {
  flex: 1;
  text-align: center;
}
.el-tabs .el-tabs__item {
  padding: 0 20px;
  height: 40px;
  box-sizing: border-box;
  line-height: 40px;
  display: inline-block;
  list-style: none;
  font-size: 14px;
  font-weight: 500;
  color: #303133;
  position: relative;
}
.el-tabs .el-tabs__item:focus,
.el-tabs .el-tabs__item:focus:active {
  outline: none;
}
.el-tabs .el-tabs__item:focus.is-active.is-focus:not(:active) {
  box-shadow: 0 0 2px 2px #409eff inset;
  border-radius: 3px;
}
.el-tabs .el-tabs__item .el-icon-close {
  border-radius: 50%;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  margin-left: 5px;
}
.el-tabs .el-tabs__item .el-icon-close:before {
  transform: scale(0.9);
  display: inline-block;
}
.el-tabs .el-tabs__item .el-icon-close:hover {
  background-color: #c0c4cc;
  color: #ffffff;
}
.el-tabs .el-tabs__item.is-active {
  color: #409eff;
}
.el-tabs .el-tabs__item:hover {
  color: #409eff;
  cursor: pointer;
}
.el-tabs .el-tabs__item.is-disabled {
  color: #c0c4cc;
  cursor: default;
}
.el-tabs .el-tabs__content {
  overflow: hidden;
  position: relative;
}
.el-tabs--card > .el-tabs__header {
  border-bottom: 1px solid #e4e7ed;
}
.el-tabs--card > .el-tabs__header .el-tabs__nav-wrap::after {
  content: none;
}
.el-tabs--card > .el-tabs__header .el-tabs__nav {
  border: 1px solid #e4e7ed;
  border-bottom: none;
  border-radius: 4px 4px 0 0;
  box-sizing: border-box;
}
.el-tabs--card > .el-tabs__header .el-tabs__active-bar {
  display: none;
}
.el-tabs--card > .el-tabs__header .el-tabs__item .el-icon-close {
  position: relative;
  font-size: 12px;
  width: 0;
  height: 14px;
  vertical-align: middle;
  line-height: 15px;
  overflow: hidden;
  top: -1px;
  right: -2px;
  transform-origin: 100% 50%;
}
.el-tabs--card > .el-tabs__header .el-tabs__item {
  border-bottom: 1px solid transparent;
  border-left: 1px solid #e4e7ed;
  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.el-tabs--card > .el-tabs__header .el-tabs__item:first-child {
  border-left: none;
}
.el-tabs--card > .el-tabs__header .el-tabs__item.is-closable:hover {
  padding-left: 13px;
  padding-right: 13px;
}
.el-tabs--card
  > .el-tabs__header
  .el-tabs__item.is-closable:hover
  .el-icon-close {
  width: 14px;
}
.el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
  border-bottom-color: #ffffff;
}
.el-tabs--card > .el-tabs__header .el-tabs__item.is-active.is-closable {
  padding-left: 20px;
  padding-right: 20px;
}
.el-tabs--card
  > .el-tabs__header
  .el-tabs__item.is-active.is-closable
  .el-icon-close {
  width: 14px;
}
.el-tabs--border-card {
  background: #ffffff;
  border: 1px solid #dcdfe6;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}
.el-tabs--border-card > .el-tabs__content {
  padding: 15px;
}
.el-tabs--border-card > .el-tabs__header {
  background-color: #f5f7fa;
  border-bottom: 1px solid #e4e7ed;
  margin: 0;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__nav-wrap::after {
  content: none;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item {
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  border: 1px solid transparent;
  margin-top: -1px;
  color: #909399;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item:first-child {
  margin-left: -1px;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item + .el-tabs__item {
  margin-left: -1px;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  color: #409eff;
  background-color: #ffffff;
  border-right-color: #dcdfe6;
  border-left-color: #dcdfe6;
}
.el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:not(.is-disabled):hover {
  color: #409eff;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-disabled {
  color: #c0c4cc;
}
.el-tabs--border-card
  > .el-tabs__header
  .is-scrollable
  .el-tabs__item:first-child {
  margin-left: 0;
}
.el-tabs--top .el-tabs__item.is-top:nth-child(2),
.el-tabs--top .el-tabs__item.is-bottom:nth-child(2),
.el-tabs--bottom .el-tabs__item.is-top:nth-child(2),
.el-tabs--bottom .el-tabs__item.is-bottom:nth-child(2) {
  padding-left: 0;
}
.el-tabs--top .el-tabs__item.is-top:last-child,
.el-tabs--top .el-tabs__item.is-bottom:last-child,
.el-tabs--bottom .el-tabs__item.is-top:last-child,
.el-tabs--bottom .el-tabs__item.is-bottom:last-child {
  padding-right: 0;
}
.el-tabs--top.el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:nth-child(2),
.el-tabs--top.el-tabs--card > .el-tabs__header .el-tabs__item:nth-child(2),
.el-tabs--top .el-tabs--left > .el-tabs__header .el-tabs__item:nth-child(2),
.el-tabs--top .el-tabs--right > .el-tabs__header .el-tabs__item:nth-child(2),
.el-tabs--bottom.el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:nth-child(2),
.el-tabs--bottom.el-tabs--card > .el-tabs__header .el-tabs__item:nth-child(2),
.el-tabs--bottom .el-tabs--left > .el-tabs__header .el-tabs__item:nth-child(2),
.el-tabs--bottom
  .el-tabs--right
  > .el-tabs__header
  .el-tabs__item:nth-child(2) {
  padding-left: 20px;
}
.el-tabs--top.el-tabs--border-card > .el-tabs__header .el-tabs__item:last-child,
.el-tabs--top.el-tabs--card > .el-tabs__header .el-tabs__item:last-child,
.el-tabs--top .el-tabs--left > .el-tabs__header .el-tabs__item:last-child,
.el-tabs--top .el-tabs--right > .el-tabs__header .el-tabs__item:last-child,
.el-tabs--bottom.el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:last-child,
.el-tabs--bottom.el-tabs--card > .el-tabs__header .el-tabs__item:last-child,
.el-tabs--bottom .el-tabs--left > .el-tabs__header .el-tabs__item:last-child,
.el-tabs--bottom .el-tabs--right > .el-tabs__header .el-tabs__item:last-child {
  padding-right: 20px;
}
.el-tabs--bottom .el-tabs__header.is-bottom {
  margin-bottom: 0;
  margin-top: 10px;
}
.el-tabs--bottom.el-tabs--border-card .el-tabs__header.is-bottom {
  border-bottom: 0;
  border-top: 1px solid #dcdfe6;
}
.el-tabs--bottom.el-tabs--border-card .el-tabs__nav-wrap.is-bottom {
  margin-top: -1px;
  margin-bottom: 0;
}
.el-tabs--bottom.el-tabs--border-card .el-tabs__item.is-bottom:not(.is-active) {
  border: 1px solid transparent;
}
.el-tabs--bottom.el-tabs--border-card .el-tabs__item.is-bottom {
  margin: 0 -1px -1px -1px;
}
.el-tabs--left,
.el-tabs--right {
  overflow: hidden;
}
.el-tabs--left .el-tabs__header.is-left,
.el-tabs--left .el-tabs__header.is-right,
.el-tabs--left .el-tabs__nav-wrap.is-left,
.el-tabs--left .el-tabs__nav-wrap.is-right,
.el-tabs--left .el-tabs__nav-scroll,
.el-tabs--right .el-tabs__header.is-left,
.el-tabs--right .el-tabs__header.is-right,
.el-tabs--right .el-tabs__nav-wrap.is-left,
.el-tabs--right .el-tabs__nav-wrap.is-right,
.el-tabs--right .el-tabs__nav-scroll {
  height: 100%;
}
.el-tabs--left .el-tabs__active-bar.is-left,
.el-tabs--left .el-tabs__active-bar.is-right,
.el-tabs--right .el-tabs__active-bar.is-left,
.el-tabs--right .el-tabs__active-bar.is-right {
  top: 0;
  bottom: auto;
  width: 2px;
  height: auto;
}
.el-tabs--left .el-tabs__nav-wrap.is-left,
.el-tabs--left .el-tabs__nav-wrap.is-right,
.el-tabs--right .el-tabs__nav-wrap.is-left,
.el-tabs--right .el-tabs__nav-wrap.is-right {
  margin-bottom: 0;
}
.el-tabs--left .el-tabs__nav-wrap.is-left > .el-tabs__nav-prev,
.el-tabs--left .el-tabs__nav-wrap.is-left > .el-tabs__nav-next,
.el-tabs--left .el-tabs__nav-wrap.is-right > .el-tabs__nav-prev,
.el-tabs--left .el-tabs__nav-wrap.is-right > .el-tabs__nav-next,
.el-tabs--right .el-tabs__nav-wrap.is-left > .el-tabs__nav-prev,
.el-tabs--right .el-tabs__nav-wrap.is-left > .el-tabs__nav-next,
.el-tabs--right .el-tabs__nav-wrap.is-right > .el-tabs__nav-prev,
.el-tabs--right .el-tabs__nav-wrap.is-right > .el-tabs__nav-next {
  height: 30px;
  line-height: 30px;
  width: 100%;
  text-align: center;
  cursor: pointer;
}
.el-tabs--left .el-tabs__nav-wrap.is-left > .el-tabs__nav-prev i,
.el-tabs--left .el-tabs__nav-wrap.is-left > .el-tabs__nav-next i,
.el-tabs--left .el-tabs__nav-wrap.is-right > .el-tabs__nav-prev i,
.el-tabs--left .el-tabs__nav-wrap.is-right > .el-tabs__nav-next i,
.el-tabs--right .el-tabs__nav-wrap.is-left > .el-tabs__nav-prev i,
.el-tabs--right .el-tabs__nav-wrap.is-left > .el-tabs__nav-next i,
.el-tabs--right .el-tabs__nav-wrap.is-right > .el-tabs__nav-prev i,
.el-tabs--right .el-tabs__nav-wrap.is-right > .el-tabs__nav-next i {
  transform: rotateZ(90deg);
}
.el-tabs--left .el-tabs__nav-wrap.is-left > .el-tabs__nav-prev,
.el-tabs--left .el-tabs__nav-wrap.is-right > .el-tabs__nav-prev,
.el-tabs--right .el-tabs__nav-wrap.is-left > .el-tabs__nav-prev,
.el-tabs--right .el-tabs__nav-wrap.is-right > .el-tabs__nav-prev {
  left: auto;
  top: 0;
}
.el-tabs--left .el-tabs__nav-wrap.is-left > .el-tabs__nav-next,
.el-tabs--left .el-tabs__nav-wrap.is-right > .el-tabs__nav-next,
.el-tabs--right .el-tabs__nav-wrap.is-left > .el-tabs__nav-next,
.el-tabs--right .el-tabs__nav-wrap.is-right > .el-tabs__nav-next {
  right: auto;
  bottom: 0;
}
.el-tabs--left .el-tabs__nav-wrap.is-left.is-scrollable,
.el-tabs--left .el-tabs__nav-wrap.is-right.is-scrollable,
.el-tabs--right .el-tabs__nav-wrap.is-left.is-scrollable,
.el-tabs--right .el-tabs__nav-wrap.is-right.is-scrollable {
  padding: 30px 0;
}
.el-tabs--left .el-tabs__nav-wrap.is-left::after,
.el-tabs--left .el-tabs__nav-wrap.is-right::after,
.el-tabs--right .el-tabs__nav-wrap.is-left::after,
.el-tabs--right .el-tabs__nav-wrap.is-right::after {
  height: 100%;
  width: 2px;
  bottom: auto;
  top: 0;
}
.el-tabs--left .el-tabs__nav.is-left,
.el-tabs--left .el-tabs__nav.is-right,
.el-tabs--right .el-tabs__nav.is-left,
.el-tabs--right .el-tabs__nav.is-right {
  float: none;
}
.el-tabs--left .el-tabs__item.is-left,
.el-tabs--left .el-tabs__item.is-right,
.el-tabs--right .el-tabs__item.is-left,
.el-tabs--right .el-tabs__item.is-right {
  display: block;
}
.el-tabs--left .el-tabs__header.is-left {
  float: left;
  margin-bottom: 0;
  margin-right: 10px;
}
.el-tabs--left .el-tabs__nav-wrap.is-left {
  margin-right: -1px;
}
.el-tabs--left .el-tabs__nav-wrap.is-left::after {
  left: auto;
  right: 0;
}
.el-tabs--left .el-tabs__active-bar.is-left {
  right: 0;
  left: auto;
}
.el-tabs--left .el-tabs__item.is-left {
  text-align: right;
}
.el-tabs--left.el-tabs--card .el-tabs__active-bar.is-left {
  display: none;
}
.el-tabs--left.el-tabs--card .el-tabs__item.is-left {
  border-left: none;
  border-right: 1px solid #e4e7ed;
  border-bottom: none;
  border-top: 1px solid #e4e7ed;
  text-align: left;
}
.el-tabs--left.el-tabs--card .el-tabs__item.is-left:first-child {
  border-right: 1px solid #e4e7ed;
  border-top: none;
}
.el-tabs--left.el-tabs--card .el-tabs__item.is-left.is-active {
  border: 1px solid #e4e7ed;
  border-right-color: #fff;
  border-left: none;
  border-bottom: none;
}
.el-tabs--left.el-tabs--card .el-tabs__item.is-left.is-active:first-child {
  border-top: none;
}
.el-tabs--left.el-tabs--card .el-tabs__item.is-left.is-active:last-child {
  border-bottom: none;
}
.el-tabs--left.el-tabs--card .el-tabs__nav {
  border-radius: 4px 0 0 4px;
  border-bottom: 1px solid #e4e7ed;
  border-right: none;
}
.el-tabs--left.el-tabs--card .el-tabs__new-tab {
  float: none;
}
.el-tabs--left.el-tabs--border-card .el-tabs__header.is-left {
  border-right: 1px solid #dfe4ed;
}
.el-tabs--left.el-tabs--border-card .el-tabs__item.is-left {
  border: 1px solid transparent;
  margin: -1px 0 -1px -1px;
}
.el-tabs--left.el-tabs--border-card .el-tabs__item.is-left.is-active {
  border-color: transparent;
  border-top-color: #d1dbe5;
  border-bottom-color: #d1dbe5;
}
.el-tabs--right .el-tabs__header.is-right {
  float: right;
  margin-bottom: 0;
  margin-left: 10px;
}
.el-tabs--right .el-tabs__nav-wrap.is-right {
  margin-left: -1px;
}
.el-tabs--right .el-tabs__nav-wrap.is-right::after {
  left: 0;
  right: auto;
}
.el-tabs--right .el-tabs__active-bar.is-right {
  left: 0;
}
.el-tabs--right.el-tabs--card .el-tabs__active-bar.is-right {
  display: none;
}
.el-tabs--right.el-tabs--card .el-tabs__item.is-right {
  border-bottom: none;
  border-top: 1px solid #e4e7ed;
}
.el-tabs--right.el-tabs--card .el-tabs__item.is-right:first-child {
  border-left: 1px solid #e4e7ed;
  border-top: none;
}
.el-tabs--right.el-tabs--card .el-tabs__item.is-right.is-active {
  border: 1px solid #e4e7ed;
  border-left-color: #fff;
  border-right: none;
  border-bottom: none;
}
.el-tabs--right.el-tabs--card .el-tabs__item.is-right.is-active:first-child {
  border-top: none;
}
.el-tabs--right.el-tabs--card .el-tabs__item.is-right.is-active:last-child {
  border-bottom: none;
}
.el-tabs--right.el-tabs--card .el-tabs__nav {
  border-radius: 0 4px 4px 0;
  border-bottom: 1px solid #e4e7ed;
  border-left: none;
}
.el-tabs--right.el-tabs--border-card .el-tabs__header.is-right {
  border-left: 1px solid #dfe4ed;
}
.el-tabs--right.el-tabs--border-card .el-tabs__item.is-right {
  border: 1px solid transparent;
  margin: -1px -1px -1px 0;
}
.el-tabs--right.el-tabs--border-card .el-tabs__item.is-right.is-active {
  border-color: transparent;
  border-top-color: #d1dbe5;
  border-bottom-color: #d1dbe5;
}

.slideInRight-transition,
.slideInLeft-transition {
  display: inline-block;
}

.slideInRight-enter {
  animation: slideInRight-enter 0.3s;
}

.slideInRight-leave {
  position: absolute;
  left: 0;
  right: 0;
  animation: slideInRight-leave 0.3s;
}

.slideInLeft-enter {
  animation: slideInLeft-enter 0.3s;
}

.slideInLeft-leave {
  position: absolute;
  left: 0;
  right: 0;
  animation: slideInLeft-leave 0.3s;
}

@keyframes slideInRight-enter {
  0% {
    opacity: 0;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes slideInRight-leave {
  0% {
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    opacity: 0;
  }
}
@keyframes slideInLeft-enter {
  0% {
    opacity: 0;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes slideInLeft-leave {
  0% {
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    opacity: 0;
  }
}
</style>
