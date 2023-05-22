import Vue from 'vue'
import Router from 'vue-router'
import TabList from '@/components/TabList'
import layout from '@/components/layout'
import canvas from '@/components/canvas'
import date from '@/components/date.vue'
import tab from '@/components/tab'
import drawer from '@/components/drawer'
import fs from '@/components/fs'
import test from '@/components/test'
// import sqliteTest from '@/components/sqlite3'
// 组件使用
import useComponent from '@/components/useComponent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/TabList',
      name: 'TabList',
      component: TabList
    },
    {
      path: '/useComponent',
      name: 'useComponent',
      component: useComponent
    },
    {
      path: '/layout',
      name: 'layout',
      component: layout
    },
    {
      path: '/canvas',
      name: 'canvas',
      component: canvas
    },
    {
      path: '/tab',
      name: 'tab',
      component: tab
    },
    {
      path: '/',
      name: 'test',
      component: test
    },
    {
      path: '/date',
      name: 'date',
      component: date
    },
    {
      path: '/drawer',
      name: 'drawer',
      component: drawer
    },
    {
      path: '/fs',
      name: 'fs',
      component: fs
    }
  ]
})
