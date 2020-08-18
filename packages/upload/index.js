import ZUpload from './src/upload'
ZUpload.install = function (Vue) {
  Vue.component(ZUpload.name, ZUpload)
}
export default ZUpload