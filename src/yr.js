
import Button from './componentsEl/button/index.js'
import ButtonGroup from './componentsEl/button/buttonGroup.js'
import Tabs from './componentsEl/tabs/index.js'
import TabPane from './componentsEl/tabs/tabPane.js'
import Dropdown from './componentsEl/dropdown/index'
import DropdownMenu from './componentsEl/dropdown-menu/index'
import DropdownItem from './componentsEl/dropdown-item'

const components = [
  Button,
  ButtonGroup,
  Tabs,
  TabPane,
  Dropdown,
  DropdownMenu,
  DropdownItem
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '2.14.1',
  install,
  Button,
  ButtonGroup,
  Tabs,
  TabPane
}
