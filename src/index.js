import ZRow from '../packages/row'
import ZCol from '../packages/col'
const components = [
  ZRow,
  ZCol
]

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  install,
  ZRow,
  ZCol
}