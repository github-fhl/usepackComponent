import ElTabs from './src/tab-pane'

/* istanbul ignore next */
ElTabs.install = function (Vue) {
  Vue.component(ElTabs.name, ElTabs)
}

export default ElTabs
