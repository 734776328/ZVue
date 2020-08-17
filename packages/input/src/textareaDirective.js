
export default {
  // 绑定到元素时调用
  bind (el, binding, vNode, oldVNode) {
    // console.log(this)
    // console.log('binding-----', binding)
    // console.log('vNode-----', vNode)
    // console.log('oldVNode-----', oldVNode)    
  },
  // 绑定的元素插入到父节点时候会调用
  inserted (el, binding, vNode, oldVNode) {
    // console.log('binding-----', binding)
    // console.log('vNode-----', vNode)
    // console.log('oldVNode-----', oldVNode)
  },
  // 所在组件的VNode更新的时候调用
  update (el, binding, vNode, oldVNode) {
    // console.log('binding-----', binding)
    // console.log('vNode-----', vNode)
    // console.log('oldVNode-----', oldVNode)
  },
  // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
  componentUpdated (el, binding, vNode, oldVNode) {
    // console.log('binding-----', binding)
    // console.log('vNode-----', vNode)
    // console.log('oldVNode-----', oldVNode)
  },
  // 指令于元素解绑时调用
  unbind (el, binding, vNode, oldVNode) {
    // console.log('binding-----', binding)
    // console.log('vNode-----', vNode)
    // console.log('oldVNode-----', oldVNode)
  }
}