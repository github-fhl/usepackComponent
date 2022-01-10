import Vue from 'vue'
import Router from 'vue-router'
import TabList from '@/components/TabList'
import layout from '@/components/layout'
import canvas from '@/components/canvas'
import zj from '@/components/zj'
import tab from '@/components/tab'
import drawer from '@/components/drawer'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/TabList',
      name: 'TabList',
      component: TabList
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
      component: zj
    },
    {
      path: '/drawer',
      name: 'drawer',
      component: drawer
    }
  ]
})
