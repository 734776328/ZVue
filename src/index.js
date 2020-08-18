import ZRow from '../packages/row'
import ZCol from '../packages/col'
import ZInput from '../packages/input'
import ZExcel from '../packages/excel'
import ZUpload from '../packages/upload'
import ZButton from '../packages/button'
const components = [
  ZRow,
  ZCol,
  ZInput,
  ZExcel,
  ZUpload,
  ZButton
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
  ZCol,
  ZInput
}
