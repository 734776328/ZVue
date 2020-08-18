import ZExcel from './src/excel.vue'
ZExcel.install = function (Vue) {
  Vue.component(ZExcel.name, ZExcel)
}
export default ZExcel